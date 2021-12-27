const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");


describe("Token1 deployment", () => {

    let owner;
    let buyerAddr;
    let token1;


    beforeEach( async() => {

    it ("Token1 Contract", async() =>{
        const Token1 =  await ethers.getContractFactory("Token1");
        token1 = await Token1.deploy();
        [owner, buyerAddr, _]=  await ethers.getSigners();
    });

   
    

    describe("should check OnlyOwner deployment and mint tokens to the owner", () =>{
    
    it ("should be called by the Owner", async() =>{
        expect(await token1.initialize.call()).to.equal(owner.address);

    });

    it("should mint the specific amount of tokens to the owner", async()=>{

        const Balance = await token1.supplyOfTokens;
        expect(await owner.balance).to.equal(Balance);
    });
});

describe("Buying", ()=>{
    it("should transfer the specific amount of tokens to the buyer address", async() =>{
        await token1.buy(50);
        const Buyer = await token1.buy().call;
        expect (await Buyer.balance).to.equal(50);
        
        
    
    });
});


});
});
