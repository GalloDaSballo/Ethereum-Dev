/**
 * Tests for the coinstarter contracts
 */

const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

const compiledContract = require('../ethereum/build/TheBall.json')

//We ensure we have a deployed contract before each test
beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

  contract = await new web3.eth.Contract(JSON.parse(compiledContract.interface))
    .deploy({data: compiledContract.bytecode})
    .send({from: accounts[0], gas: '1000000'})
})

describe('Contract Functionality', () => {
  it('Retrieve message', async () => {
    const message = await contract.methods.message().call()
    assert.ok(message)
  })
  it('Change message', async () => {
    const initialMessage = await contract.methods.message().call()
    await contract.methods.changeMessage('The second Message').send({
      from: accounts[1],
      value: 100
    })
    const secondMessage = await contract.methods.message().call()
    assert.equal('The second Message', secondMessage)
    assert.ok(initialMessage != secondMessage)
  })
  it('Change message requires minimum contribution of 100 wei', async () => {
    try{
      await contract.methods.changeMessage('The second Message').send({
        from: accounts[1],
        value: 20
      })
      assert(false)
    } catch(err){
      assert.ok(err)
    }
  })
  it('Payout Fees to owner', async () => {
    const managerBalanceBefore = await web3.eth.getBalance(accounts[0])
    await contract.methods.changeMessage('The second Message').send({
      from: accounts[1],
      value: web3.utils.toWei('6', 'ether') //6 ether
    })
    //Pay the owner = accounts[0]
    await contract.methods.payOwner().send({
      from: accounts[0]
    })
    const managerBalanceAfter= await web3.eth.getBalance(accounts[0])
    
    //We expect the difference to be more than 5, less than 6 (due to fees)
    assert(web3.utils.fromWei((managerBalanceAfter - managerBalanceBefore).toString(), 'ether') > 5)
  })
})
