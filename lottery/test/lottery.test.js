const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const {interface, bytecode} = require('../compile')

let lottery
let accounts
console.log("THIS IS OK")
beforeEach(async () => {
  accounts = await web3.eth.getAccounts()
  console.log("Accounts")
  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode})
    .send({from: accounts[0], gas: '1000000'})
})


describe('Lottery Contract', () => {
  it('Deploy a contract', () => {
    assert.ok(lottery.options.address)
  })

  it('Can one account join the contract?', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      //toWei, converts ether to wei
      value: web3.utils.toWei('0.01', 'ether')
    })

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    })

    assert.equal(accounts[0], players[0])
    assert.equal(1, players.length)
  })

  it('Can multiple accounts join the contract?', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      //toWei, converts ether to wei
      value: web3.utils.toWei('0.01', 'ether')
    })
    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei('0.01', 'ether')
    })
    await lottery.methods.enter().send({
      from: accounts[2],
      value: web3.utils.toWei('0.01', 'ether')
    })

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    })

    assert.equal(accounts[0], players[0])
    assert.equal(accounts[1], players[1])
    assert.equal(accounts[2], players[2])
    assert.equal(3, players.length)
  })

  it('Require a minimum amount of ether', async () => {
    try{
      await lottery.methods.enter().send({
        from: accounts[0],
        value: 200 //200 wei is not enough
      })
      assert(false)
    } catch(err){
      //Returns true if err exists
      assert(err);
    }
  })

  it('Lottery can only be called by the Manager', async () => {
    try{
      await lottery.methods.pickWinner.send({
        from: accounts[1] //this account is different from the one that deploys
      })
      assert(false)
    } catch(err){
      assert(err)
    }
  })

  it('Sends money to the winner and resets the player count', async () => {
    //Only one player in the contract so that we know the winner
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('1', 'ether')
    })

    //Check account[0] balance before and after the pickWinner call
    const initialBalance = await web3.eth.getBalance(accounts[0])

    //Balance of Contract
    console.log("Balance of Contract " , await web3.eth.getBalance(lottery.options.address))

    await lottery.methods.pickWinner().send({from: accounts[0]})
    const finalBalance = await web3.eth.getBalance(accounts[0])

    const difference = finalBalance - initialBalance
    console.log("Difference ", difference)
    //Difference is near 1, not 1 because we pay fees
    assert(difference > web3.utils.toWei('0.9', 'ether'))

    //Check that the array of players is empty
    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    })
    console.log("Players.length = ", players.length)
    assert(players.length == 0)
  })
})
