// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

bb = function (value, decimals=18) {
    return ethers.utils.parseUnits(value.toString(), decimals)
}

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const multisend = await (await ethers.getContractFactory("contracts/MultisendV2.sol:Multisend")).deploy(bb(0.001))
  await multisend.deployed();
  console.log("multisend deployed to:", multisend.address);
  await new Promise(resolve => setTimeout(resolve, 5000))
  await hre.run("verify:verify", {
    address: multisend.address,
    constructorArguments: [bb(0.001)],
  });
}

async function verify() {
  // const addr = "0x83cC30e1E5f814883B260CE32A2a13D3493E5439";
  // const addr = "0xBC998DFe78caf1a5C00EB0C987883A1cB27380eB";
  const addr = "0xAC762e706Cf670c6d7576B24Ca240912EC3dEE9D"
  const multisend = await hre.ethers.getContractAt("contracts/MultisendV2.sol:Multisend", addr);
  await hre.run("verify:verify", {
    address: multisend.address,
    constructorArguments: [bb(0.001)],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

verify().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
