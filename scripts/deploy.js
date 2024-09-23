async function main() {
    // Deploy Counter
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();
    console.log("Counter deployed to:", counter.address);

    // Deploy Greet
    const Greet = await ethers.getContractFactory("Greet");
    const greet = await Greet.deploy();
    await greet.deployed();
    console.log("Greet deployed to:", greet.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
