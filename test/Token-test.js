const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");


describe("Token & it's Proxy flow test : ", () => {
    let 
        owner,a1,a2,a3,a4,
        token1, token2;

    it ("Token1 Deployment : ", async() =>{
        [owner,a1,a2,a3,a4]=  await ethers.getSigners();
        const Token1 =  await ethers.getContractFactory("Token1");
        token1 = await Token1.deploy(); 
        await token1.deployed();
    });

    
    it ("deploy the initialize function : ", async() =>{
        await token1.initialize().deploy;
    });

    it("should mint the specific amount of tokens to the owner: ", async()=>{

        const Balance = await token1.supplyOfTokens;
        expect(await owner.balance).to.equal(Balance);
    });



    describe("Buying", ()=> {
    it("should transfer the specific amount of tokens to the buyer address: ", async() =>{
        await token1.connect(a1).buy(50);
        expect(await (a1.balance)).to.equal(50);


    
    });

    it("should mint the tokens to only owner", async() =>{

    
    })
    
});

    
    it("deploy token2: ",async()=>{
        const Token2 = await ethers.getContractFactory("Proxy");
        token2 = await Token2.deploy(/* remove this commit phrase here you will right your constructor parameters */ );
        await token2.deployed();
    });

});
