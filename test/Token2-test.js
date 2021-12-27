const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Proxy", function () {
  
  it("should run the updated contract", async function () {
    const Proxy = await ethers.getContractFactory("Proxy");
    proxy = await Proxy.deploy();
    await proxy.deployed();

  })
})