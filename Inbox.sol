pragma solidity ^0.4.17; // Tipo di var

contract Inbox{ //Inizio contratto
    string public message; //Storage variable, vivrà per tutta la vita del contratto
    //Siccome la funzione è pubblica, la funzione message()  viene creata automaticamente e fungera come getMessage()

    function Inbox(string initialMessage) public{ //Stesso nome del contract = constructor, chiamata solo la prima volta quando il contract è deployed
        message = initialMessage;
    }

   //Le altre funzioni sono chiamate da altri quando vogliono
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    //To call this function we need to send a transaction to the contract

    //Function            //Dichiarazione tipi //Tipo di return value
    function getMessage() public view returns (string){
        return message;
    }
    //This function is free to execute because it doesn't modify the data

    //Altri tipi di funzione
    //public (anyone in the world can call this function), private (only the contract code can call the function), view (non modifica lo stato del contratto), constant, pure, payable
}
