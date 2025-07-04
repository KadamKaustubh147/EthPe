// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract EthTransfer is ReentrancyGuard {
    /// Event emitted when ETH is successfully transferred
    event EthTransferred(
        address indexed from,
        address indexed to,
        uint256 amount
    );

    /// param recipient The address to receive the ETH
    function sendEth(address payable recipient) external payable nonReentrant {
        require(msg.value > 0, "Must send ETH");
        require(recipient != address(0), "Invalid recipient");

        (bool success, ) = recipient.call{value: msg.value}("");
        require(success, "ETH transfer failed");

        emit EthTransferred(msg.sender, recipient, msg.value);
    }

    function getContractBalance() external view returns (uint256) {
        return msg.sender.balance;
    }

    receive() external payable {}
}
