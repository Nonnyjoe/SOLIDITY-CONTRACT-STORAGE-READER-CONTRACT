import { ethers, network } from "hardhat";
var Web3 = require('web3');
var web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/kNgqkSwSMIQGUQ_wRhjXrWuaB4WoBfGe");
//var convertHex = require('convert-hex');

async function main() {
    const Dai_Ticket = "0x334cBb5858417Aee161B53Ee0D5349cCF54514CF";
    const usdt = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const Uniswap = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
    const Balancer_Dao = "0xb618F903ad1d00d6F7b92f5b0954DcdC056fC533";
    const kyber_dao = "0x49bdd8854481005bBa4aCEbaBF6e06cD5F6312e9";
    const shiba = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE";

    const hexToNum = await ethers.getContractFactory("readStorage");
    const HexToNum = await hexToNum.deploy();
    await HexToNum.deployed();

    for (let i = 3; i <= 5; i++) {
        console.log(`READING FROM SHIBA AT SLOT ${i}`);
        const contents = await web3.eth.getStorageAt(shiba, i);
        console.log(contents);
        const contentsNum = await HexToNum.hexToNum(contents);
        console.log(contentsNum);
        console.log(web3.utils.toAscii(contents));
    }

    for (let i = 0; i <= 2; i++) {
        console.log(`READING FROM UNISWAP AT SLOT ${i}`);
        const contents = await web3.eth.getStorageAt(Uniswap, i);
        console.log(contents);
        const contentsNum = await HexToNum.hexToNum(contents);
        console.log(contentsNum);
        console.log(web3.utils.toAscii(contents));
    }

    console.log(`READING FROM USDT`);
    const contents = await web3.eth.getStorageAt(usdt, 1);
    console.log(contents);
    const contentsNum = await HexToNum.hexToNum(contents);
    console.log(contentsNum);
    console.log(web3.utils.toAscii(contents));

   
    for (let i = 3; i <= 5; i++) {
        console.log(`READING FROM BALANCER DAO AT SLOT ${i}`);
        const contents = await web3.eth.getStorageAt(Balancer_Dao, i);
        console.log(contents);
        const contentsNum = await HexToNum.hexToNum(contents);
        console.log(contentsNum);
        console.log(web3.utils.toAscii(contents));
    }

    for (let i = 0; i <= 5; i++) {
        console.log(`READING FROM KYBER DAO AT SLOT ${i}`);
        const contents = await web3.eth.getStorageAt(kyber_dao, i);
        console.log(contents);
        const contentsNum = await HexToNum.hexToNum(contents);
        console.log(contentsNum);
        console.log(web3.utils.toAscii(contents));
    }

    


}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });