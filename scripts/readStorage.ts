import { ethers, network } from "hardhat";
import { time } from "@nomicfoundation/hardhat-network-helpers";
import hre from "hardhat";
import { BigNumber } from "ethers";
var Web3 = require('web3');
var web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/kNgqkSwSMIQGUQ_wRhjXrWuaB4WoBfGe");
async function main() {
    const Dai_Ticket = "0x334cBb5858417Aee161B53Ee0D5349cCF54514CF";
    const usdt = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const Uniswap = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
    const Balancer_Dao = "0xb618F903ad1d00d6F7b92f5b0954DcdC056fC533";
    const kyber_dao = "0x49bdd8854481005bBa4aCEbaBF6e06cD5F6312e9";

    const hexToNum = await ethers.getContractFactory("readStorage");
    const HexToNum = await hexToNum.deploy();
    await HexToNum.deployed();

    console.log(`READING FROM USDT`);
    const contents = await web3.eth.getStorageAt(usdt, 1);
    console.log(contents);
    const contentsNum = await HexToNum.hexToNum(contents);
    console.log(contentsNum);

    console.log(`READING FROM UNISWAP`);
    const contents2 = await web3.eth.getStorageAt(Uniswap, 0);
    console.log(contents2);
    const contentsNum2 = await HexToNum.hexToNum(contents2);
    console.log(contentsNum2);

    console.log(`READING FROM BALANCER DAO`);
    const contents3 = await web3.eth.getStorageAt(Balancer_Dao, 0);
    console.log(contents3);
    const contentsNum3 = await HexToNum.hexToNum(contents3);
    console.log(contentsNum3);

    console.log(`READING FROM kyber_dao`);
    const contents4 = await web3.eth.getStorageAt(kyber_dao, 0);
    console.log(contents4);
    const contentsNum4 = await HexToNum.hexToNum(contents4);
    console.log(contentsNum4);

    console.log(`READING FROM Dai_Ticket`);
    const contents5 = await web3.eth.getStorageAt(Dai_Ticket, 0);
    console.log(contents5);
    const contentsNum5 = await HexToNum.hexToNum(contents5);
    console.log(contentsNum5);


}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });