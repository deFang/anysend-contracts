require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
const apikey = fs.readFileSync(".apikey").toString().trim();
const INFURA_PROJECT_ID = fs.readFileSync(".infura").toString().trim();
console.log(mnemonic);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      accounts: { mnemonic: mnemonic },
      allowUnlimitedContractSize: true,
    },
    ethereum: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: { mnemonic: mnemonic },
    },
    bsc: {
      url: "https://aged-twilight-bush.bsc.quiknode.pro/3340cfe0b99bc659b2d1929df8b0a315d0ff240f/",
      accounts: { mnemonic: mnemonic },
    },
    bsctestnet: {
      url: "https://nd-542-058-200.p2pify.com/716f60d71b394ac2874ef79b2519932d",
      accounts: { mnemonic: mnemonic},
    },
    heco: {
      url: "https://http-mainnet.hecochain.com",
      accounts: { mnemonic: mnemonic },
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: { mnemonic: mnemonic },
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: { mnemonic: mnemonic },
    },
    hecotestnet: {
      url: "https://http-testnet.hecochain.com",
      accounts: { mnemonic: mnemonic },
    },
    polygon: {
      url: "https://rpc.ankr.com/polygon",
      accounts: { mnemonic: mnemonic },
    },
    mumbai: {
      // url: 'https://rpc-mumbai.maticvigil.com',
      url: "https://rpc-mumbai.matic.today",
      accounts: { mnemonic: mnemonic },
    },
    arbitrum: {
      url: "https://arb-mainnet.g.alchemy.com/v2/0GlydYJoSqHrgmkFqEyfYJq1XBK-fSfT",
      accounts: { mnemonic: mnemonic },
    },
    arbitrumrinkeby: {
      url: "https://rinkeby.arbitrum.io/rpc",
      accounts: {mnemonic: mnemonic},
    },
    aurora:{
      url: "https://mainnet.aurora.dev",
      accounts: {mnemonic: mnemonic},
    },
    avalanche:{
      url: "https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc",
      accounts: {mnemonic: mnemonic},
    },
    harmony:{
      url: "https://rpc.heavenswail.one",
      accounts:{mnemonic: mnemonic},
    },
    okx:{
      url: "https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff",
      accounts:{mnemonic: mnemonic},
    },
    fantom:{
      url: "https://fantom-mainnet.public.blastapi.io",
      accounts:{mnemonic: mnemonic}
    },
    optimism:{
      url: "https://mainnet.optimism.io",
      accounts: {mnemonic:mnemonic}
    },
    moonbeam:{
      url: "https://moonbeam.public.blastapi.io",
      accounts: {mnemonic:mnemonic}
    }


  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    // apiKey: "G6EIDPV3W4KUCR4R5DISJ5PP3AMRCFE4GU",
    apiKey: "YDHDCB7KUU9SHQK72JF9R8W7USYW61K1NP"
  },
  mocha: {
    timeout: 2000000,
  },
};
