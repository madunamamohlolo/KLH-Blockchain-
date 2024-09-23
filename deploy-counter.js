// deploy-counter.js

async function main() {
  // Get the contract factory
  const Counter = await ethers.getContractFactory("Counter");

  // Deploy the contract
  const counter = await Counter.deploy();

  // Wait for the contract to be deployed
  await counter.deployed();

  console.log("Counter deployed to:", counter.address);
}

// Run the script and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
