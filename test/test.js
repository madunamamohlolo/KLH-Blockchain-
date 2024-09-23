const { expect } = require("chai");

describe("Counter", function () {
    it("Should return the initial count", async function () {
        const Counter = await ethers.getContractFactory("Counter");
        const counter = await Counter.deploy();
        await counter.deployed();

        expect(await counter.getCount()).to.equal(0);
    });

    it("Should increase the count", async function () {
        const Counter = await ethers.getContractFactory("Counter");
        const counter = await Counter.deploy();
        await counter.deployed();

        await counter.increment();
        expect(await counter.getCount()).to.equal(1);
    });

    it("Should decrease the count", async function () {
        const Counter = await ethers.getContractFactory("Counter");
        const counter = await Counter.deploy();
        await counter.deployed();

        await counter.decrement();
        expect(await counter.getCount()).to.equal(-1);
    });
});
