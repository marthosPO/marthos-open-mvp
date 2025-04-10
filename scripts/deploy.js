// 파일 명: scripts/deploy.js – Hardhat 배포 스크립트 (Mumbai용)
/*
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Prediction = await hre.ethers.getContractFactory("recordPrediction");
  const prediction = await Prediction.deploy();
  await prediction.deployed();
  console.log("recordPrediction deployed to:", prediction.address);

  const NFT = await hre.ethers.getContractFactory("ContributionNFT");
  const nft = await NFT.deploy();
  await nft.deployed();
  console.log("ContributionNFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
*/
