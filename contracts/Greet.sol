// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greet {
    mapping(address => string) private names;

    // Function to set user's name
    function setName(string memory _name) public {
        names[msg.sender] = _name;
    }

    // Function to greet the user based on whether they have set a name
    function greet() public view returns (string memory) {
        string memory name = names[msg.sender];
        if (bytes(name).length == 0) {
            return "Hello Anon";
        } else {
            return string(abi.encodePacked("Hello ", name));
        }
    }
}
