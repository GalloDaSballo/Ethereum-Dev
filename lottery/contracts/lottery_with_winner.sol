pragma solidity ^0.4.17;

contract Lottery{
    address public manager; //The manager of the contract creator
    address[] public players;
    address public previousWinner;

    constructor() public { //The constructor
        //Automatically figure out who sent the contract and
        //save their address to the manager variable
        //msg is a global variable available during any call or tx
        manager = msg.sender; //The address of the sender i.e. the creator
        previousWinner = manager;
    }

    function enter() public payable{
        //require is used for validation, if the require results in true then the function is executed
        require(msg.value >= .01 ether); //Need to send at least .01
        players.push(msg.sender);
    }

    //This function will generate the pseudorandom number
    function random() private view returns (uint){
        //Hashing algorythm
        //keccak256 is also hashingß
        return uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
    }

    function pickWinner() public restricted{
        uint index = random() % players.length;
        //players[index] returns an address which has certain properties
        //players[index].transfer(amount) will attempt to transfer certain amount of money
        //will transfer all the money to the account of the winner
        players[index].transfer(address(this).balance);
        previousWinner = players[index];
        //Players get's reset as a zero element array that is empty
        players = new address[](0);
    }

    //A modifier is a word you can put to describe the function which mentions some requirements
    modifier restricted(){
        require(msg.sender == manager); //Only if the creator of the contract is calling this function
        _; //The _ means that the compiler will take the rest of the code from the function
    }

    function getPlayers() public view returns (address[]){
        return players;
    }

}
