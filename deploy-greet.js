// deploy-greet.js

async function main() {
  // Get the contract factory
  const Greet = await ethers.getContractFactory("Greet");

  // Deploy the contract
  const greet = await Greet.deploy();

  // Wait for the contract to be deployed
  await greet.deployed();

  console.log("Greet deployed to:", greet.address);
}

// Run the script and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
