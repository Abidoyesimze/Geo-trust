// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract BlockchainLandRegistry is ERC721, AccessControl, ReentrancyGuard {
    bytes32 public constant LAND_INSPECTOR_ROLE = keccak256("LAND_INSPECTOR_ROLE");
    bytes32 public constant SELLER_ROLE = keccak256("SELLER_ROLE");
    
    struct Land {
        string location;
        string documentHash;
        uint256 price;
        bool isForSale;
        string gpsCoordinates;
        bool isVerified;
    }

    struct Transaction {
        address seller;
        address buyer;
        uint256 tokenId;
        uint256 price;
        uint256 timestamp;
    }

    mapping(uint256 => Land) public lands;
    mapping(uint256 => address[]) public ownershipHistory;
    Transaction[] private transactionHistory;
    
    uint256 private _nextTokenId;

    uint256 public constant MAX_TRANSACTION_HISTORY = 1000;
    uint256 public platformFeePercentage = 1; 

    event PropertyListed(uint256 indexed tokenId, uint256 price, string location);
    event LandTransferred(address indexed seller, address indexed buyer, uint256 tokenId, uint256 price);
    event PriceChanged(uint256 indexed tokenId, uint256 newPrice);
    event LandVerified(uint256 indexed tokenId, address inspector);
    event LandUnlisted(uint256 indexed tokenId);

    constructor() ERC721("LandRegistry", "LAND") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _nextTokenId = 1;
    }

    function registerLand(
        string memory location, 
        string memory documentHash, 
        uint256 price, 
        string memory gpsCoordinates
    ) external onlyRole(SELLER_ROLE) {
        uint256 newTokenId = _nextTokenId++;
        lands[newTokenId] = Land(location, documentHash, price, false, gpsCoordinates, false);
        _safeMint(msg.sender, newTokenId);
    }

    function markForSale(uint256 tokenId, uint256 price) external {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        require(lands[tokenId].isVerified, "Land not verified");
        lands[tokenId].isForSale = true;
        lands[tokenId].price = price;
        emit PropertyListed(tokenId, price, lands[tokenId].location);
    }

    function changePrice(uint256 tokenId, uint256 newPrice) external {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        require(lands[tokenId].isForSale, "Not for sale");
        lands[tokenId].price = newPrice;
        emit PriceChanged(tokenId, newPrice);
    }

    function removeFromSale(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        lands[tokenId].isForSale = false;
        emit LandUnlisted(tokenId);
    }

    function verifyLand(uint256 tokenId) external onlyRole(LAND_INSPECTOR_ROLE) {
        lands[tokenId].isVerified = true;
        emit LandVerified(tokenId, msg.sender);
    }

    function inspectLand(uint256 tokenId) external view onlyRole(LAND_INSPECTOR_ROLE) returns (string memory) {
        return lands[tokenId].documentHash;
    }

    function buyLand(uint256 tokenId) external payable nonReentrant {
        require(lands[tokenId].isForSale, "Not for sale");
        require(lands[tokenId].isVerified, "Land not verified");
        require(msg.value == lands[tokenId].price, "Payment does not match the exact price");

        address seller = ownerOf(tokenId);
        uint256 platformFee = (lands[tokenId].price * platformFeePercentage) / 100;
        uint256 sellerAmount = lands[tokenId].price - platformFee;

        _safeTransfer(seller, msg.sender, tokenId, "");
        lands[tokenId].isForSale = false;

        recordTransaction(seller, msg.sender, tokenId, lands[tokenId].price);

        
        (bool success, ) = payable(seller).call{value: sellerAmount}("");
        require(success, "Transfer to seller failed");
    }
    
    function recordTransaction(address seller, address buyer, uint256 tokenId, uint256 price) internal {
        
        if (transactionHistory.length >= MAX_TRANSACTION_HISTORY) {
            transactionHistory[transactionHistory.length % MAX_TRANSACTION_HISTORY] = 
                Transaction(seller, buyer, tokenId, price, block.timestamp);
        } else {
            transactionHistory.push(Transaction(seller, buyer, tokenId, price, block.timestamp));
        }
        ownershipHistory[tokenId].push(buyer);
        emit LandTransferred(seller, buyer, tokenId, price);
    }
    
    function getOwnershipHistory(uint256 tokenId) external view returns (address[] memory) {
        return ownershipHistory[tokenId];
    }
    
    function getTransactionHistory(uint256 start, uint256 end) external view returns (Transaction[] memory) {
        require(start < end && end <= transactionHistory.length, "Invalid range");
        uint256 length = end - start;
        Transaction[] memory result = new Transaction[](length);
        for (uint256 i = 0; i < length; i++) {
            result[i] = transactionHistory[start + i];
        }
        return result;
    }
    
    function assignRole(address account, bytes32 role) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(role, account);
    }
    
    function getLandDetails(uint256 tokenId) external view returns (
        string memory, string memory, uint256, bool, string memory, bool
    ) {
        Land memory land = lands[tokenId];
        return (land.location, land.documentHash, land.price, land.isForSale, land.gpsCoordinates, land.isVerified);
    }

    function setPlatformFee(uint256 newFeePercentage) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(newFeePercentage <= 5, "Fee too high");
        platformFeePercentage = newFeePercentage;
    }

    function withdrawPlatformFees() external onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 balance = address(this).balance;
        require(balance > 0, "No fees to withdraw");
        (bool success, ) = payable(msg.sender).call{value: balance}("");
        require(success, "Withdrawal failed");
    }

    
    receive() external payable {
        
    }


    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
