/**
 * Tests for the coinstarter contracts
 */

const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

const compiledFactory = require('../ethereum/build/CampaignFactory.json')
const compiledCampaign = require('../ethereum/build/Coinstarter.json')

let accounts //All the accounts
let factory //Reference to the factory script
let newCampaignsAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'})

  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  });
  //With ES5
  [newCampaignsAddress] = await factory.methods.getDeployedCampaigns().call()
  //const addresses = await factory.methods.getDeployedCampaigns().call()
  // newCampaignsAddress = addresses[0]
  //
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    newCampaignsAddress
  )
})

describe('Campaigns test', () => {
  it('Deploys a factory and a campaign', () => {
    //Test that there is an address
    assert.ok(factory.options.address)
    assert.ok(campaign.options.address)
  })
  it('Marks caller as the campaign manager', async () => {
    const manager = await campaign.methods.manager().call()
    assert.equal(accounts[0], manager)
  })
  it('User can contribute and get\'s marked as an approver', async () => {
    await campaign.methods.contribute().send({
      value: 200,
      from: accounts[1] //account != manager
    })
    const isContributor = await campaign.methods.approvers(accounts[1]).call()
    assert(isContributor)
  })
  it('Campaign requires a minimum contribution', async() => {
    try{
      await campaign.methods.contribute().send({
        value: '5',
        from: accounts[1]
      })
      assert(false)
    } catch(err){
      assert(err)
    }
  })
  it('Allows a manager to create a payment request', async () => {
    await campaign.methods
      .createRequest('Spese Varie', '100', accounts[2]).send({
      from: accounts[0],
      gas: 1000000
    })
    //this is a struct but we cannot get all the values in the mapping
    const request = await campaign.methods.requests(0).call()
    assert.equal('Spese Varie', request.description);
    assert.equal('100', request.value);
  })
  it('Process Request', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    })

    await campaign.methods
      .createRequest('Description', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({from: accounts[0], gas: 1000000})

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: 1000000
    })

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: 1000000
    })

    //Check that accounts[1] has more money now
    let balance = await web3.eth.getBalance(accounts[1])
    balance = web3.utils.fromWei(balance, 'ether')
    balance = parseFloat(balance)

    assert(balance > 104)
  })
})
