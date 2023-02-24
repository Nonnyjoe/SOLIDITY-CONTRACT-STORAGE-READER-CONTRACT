// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract readStorage {

    function hexToNum(bytes32 hexNum)  public pure returns(uint256){
        return uint256(hexNum);
    }

}