import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract, ethers } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployENSSubdomainManager: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const ensRegistryAddress = "0xc2564e41B7F5Cb66d2d99466450CfebcE9e8228f"; // Replace with actual ENS registry address
  const resolverAddress = "0x231b0Ee14048e9dCcD1d247744d114a4EB5E8E63"; // Replace with actual resolver address
  const rootNode = ethers.namehash("blockbocado.eth"); // Replace with your domain

  await deploy("ENSSubdomainManager", {
    from: deployer,
    // Contract constructor arguments
    args: [ensRegistryAddress, resolverAddress, rootNode],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  //const yourContract = await hre.ethers.getContract<Contract>("ENSSubdomainManager", deployer);
  //console.log("👋 Initial greeting:", await yourContract.greeting());
};

export default deployENSSubdomainManager;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployENSSubdomainManager.tags = ["ENSSubdomainManager"];
