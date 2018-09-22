const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3') //Web3 is a constructor of the object
const web3 = new Web3(ganache.provider())
const {interface, bytecode} = require('../compile')

/**
 * Before starting the test we will always need to deploy the contract
 */
// beforeEach(() => {
//   //Get list of all accounts
//   web3.eth.getAccounts() //Will return a promise
//     .then(fetchedAccounts => { //That's why we need the .then
//       console.log(fetchedAccounts) //ganache creates accounts that are unlocked i.e. can be used with no
//     })
//   //Use one of the accounts to  deploy the contract
//
// })
/****
**** Refactored the above function with async and wait
****/
let accounts
let inbox
beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

  let contractsDefaults = ['Hi there!']
  //inbox will be the reference to the actual contract stored in the blockchain. We will be able to call methods on it
  inbox = await new web3.eth.Contract(JSON.parse(interface)) //Contract interface
    .deploy({data: bytecode, arguments: contractsDefaults}) //Set up the contract
    .send({from: accounts[0], gas: '1000000'}) //Send the contract from account[0] (provided by ganache)
})

describe('Inbox', () => {
  it('Deploys a contract', () => {
    console.log(inbox)
    //The contract has been properly deployed
    assert.ok(inbox.options.address)
  })

  it('Contract has a default message', async () => {
    //inbox is the reference to the contract object
    //methods to access the methods of the contract
    //message() to call the function with certain amount of arguments
    //call() to give certain arguments to the transaction we are going to send to the network
    const message = await inbox.methods.message().call();

    assert.equal(message, 'Hi there!')
  })

  it('Can change the message', async () => {
    await inbox.methods.setMessage('Changed Message').send({from: accounts[0]})

    const message = await inbox.methods.message().call()
    assert.equal(message, 'Changed Message')
  })
})

/**
 * Mocha test examples
 */
// /**
//  * A few tests
//  */
// class Car{
//   park(){
//     return 'stopped'
//   }
//   drive(){
//     return 'vroom'
//   }
// }
// /**
//  * Describe
//  * @param string -> the name of the test fgroup
//  * @param function -> the finciton tjhat contains the test
//  */
// let car
// //Before every test, car is created and available
// beforeEach(() => {
//    car = new Car()
// })
// describe('Car', () => {
//   it('Park returns stopped', () => {
//     assert.equal(car.park(), 'stopped')
//   })
//   it('Drive returns vroom', () => {
//     assert.equal(car.drive(), 'vroom')
//   })
// })
