// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract LandRegistry is ERC721, Ownable, ReentrancyGuard {
    struct Land {
        string location;
        string documentHash;
        uint256 price;
        bool isForSale;
    }

    // Mapping from tokenId to Land details
    mapping(uint256 => Land) public lands;

    uint256 private _currentTokenId;

    event LandRegistered(uint256 indexed tokenId, string location, uint256 price);
    event LandPriceUpdated(uint256 indexed tokenId, uint256 newPrice);
    event LandSaleStatusUpdated(uint256 indexed tokenId, bool isForSale);

    constructor() ERC721("LandOwnership", "LAND") {
        _currentTokenId = 0;
    }

    // Register a new Land token
    function registerLand(string memory location, string memory documentHash, uint256 price) external onlyOwner {
        uint256 newTokenId = _getNextTokenId();
        lands[newTokenId] = Land(location, documentHash, price, false);
        _safeMint(msg.sender, newTokenId);
        _incrementTokenId();

        emit LandRegistered(newTokenId, location, price);
    }

    // Update land price
    function updateLandPrice(uint256 tokenId, uint256 newPrice) external {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Caller is not owner nor approved");
        lands[tokenId].price = newPrice;
        emit LandPriceUpdated(tokenId, newPrice);
    }

    // Set land for sale status
    function setLandForSale(uint256 tokenId, bool isForSale) external {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Caller is not owner nor approved");
        lands[tokenId].isForSale = isForSale;
        emit LandSaleStatusUpdated(tokenId, isForSale);
    }

    // Purchase land
    function purchaseLand(uint256 tokenId) external payable nonReentrant {
        require(lands[tokenId].isForSale, "Land is not for sale");
        require(msg.value >= lands[tokenId].price, "Insufficient payment");

        address seller = ownerOf(tokenId);
        _transfer(seller, msg.sender, tokenId);
        
        // Transfer the payment to the seller
        payable(seller).transfer(msg.value);

        // Update sale status
        lands[tokenId].isForSale = false;
        emit LandSaleStatusUpdated(tokenId, false);
    }

    // Fetch land details
    function getLandDetails(uint256 tokenId) external view returns (string memory, string memory, uint256, bool) {
        require(_exists(tokenId), "Token does not exist");
        Land memory land = lands[tokenId];
        return (land.location, land.documentHash, land.price, land.isForSale);
    }

    // Override transferFrom and safeTransferFrom to update isForSale status
    function _transfer(address from, address to, uint256 tokenId) internal override {
        super._transfer(from, to, tokenId);
        lands[tokenId].isForSale = false;
        emit LandSaleStatusUpdated(tokenId, false);
    }

    // Internal function to get the next token ID
    function _getNextTokenId() private view returns (uint256) {
        return _currentTokenId + 1;
    }

    // Internal function to increment the token ID
    function _incrementTokenId() private {
        _currentTokenId++;
    }
}