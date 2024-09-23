// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    int private count;

    // Constructor initializes the counter
    constructor() {
        count = 0;
    }

    // Function to get the current count
    function getCount() public view returns (int) {
        return count;
    }

    // Function to increase the count
    function increment() public {
        count += 1;
    }

    // Function to decrease the count
    function decrement() public {
        count -= 1;
    }
}
