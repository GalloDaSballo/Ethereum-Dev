pragma solidity ^0.4.25;

contract TheBall {
    string public message;
    address private owner;
    uint minimumContribution;

    constructor() public{
        owner = msg.sender;
        message = 'Make a contribution to change the message';
        minimumContribution = 100;
    }

    function changeMessage(string newMessage) public payable{
        require(msg.value >= minimumContribution);
        message = newMessage;
    }

    function payOwner() public{
        require(msg.sender == owner);
        owner.transfer(address(this).balance);
    }
}
