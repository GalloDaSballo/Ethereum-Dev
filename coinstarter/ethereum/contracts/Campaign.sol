pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public{
        address newCampaignsAddress = new Coinstarter(minimum, msg.sender);
        deployedCampaigns.push(newCampaignsAddress);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Coinstarter{

    //The struct defines a new type. We can have as many instances of the struct as want
    struct Request {
        string description; //Explanation of the expenditure
        uint value; //How much is needed
        address recipient; //Who's going to receive the payment
        bool complete; //Has the request already been processed
        uint approvalCount; //Count of approvals
        mapping(address => bool) approvalVotes;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    constructor(uint minimum, address creator) public {
        //manager = msg.sender; Since we create the contract with another contract, we can't use msg.sender, we need to pass the address via the constructor
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable{
        //Needs to be above minimumContribution
        require(msg.value >= minimumContribution);
        //For a mapping
        approvers[msg.sender] = true; //This allows to check if the user contributed
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient)
    public restricted{
        //type name = constructor
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
            //We don't need to initialize the reference type
        });

        //Alternative struct Syntax
        //Request(description, value, recipient, false)
        //in this version we only provide the value of the variables, could cause issues

        requests.push(newRequest);
    }

    function approveRequest(uint indexOfRequest) public{
        Request storage request = requests[indexOfRequest];

        require(approvers[msg.sender]);
        //Make sure that this user didn't already vote
        require(request.approvalVotes[msg.sender] != true);

        request.approvalVotes[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint indexOfRequest) public restricted {
        Request storage request = requests[indexOfRequest];
        require(request.complete != true);
        require(request.approvalCount > (approversCount/2));
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view
      returns(uint, uint, uint, address)
    {
      return(
        minimumContribution,
        address(this).balance, //amount of money avail to the contract
        approversCount,
        manager
      );
    }

    function getRequestsCount() public view returns(uint){
      return requests.length;
    }
}
