import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const GeotrustModule = buildModule("Geotrust", (m) => {

  const geotrust = m.contract("BlockchainLandRegistry", );

  return { geotrust };
});

export default GeotrustModule;
