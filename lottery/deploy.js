const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const {interface, bytecode} = require('./compile')

//Our wallet with our real key, the mnemonic phrase and the link to the node
const provider = new HDWalletProvider(
  'merge few cherry glare next inject trigger top load next tube charge',
  'https://rinkeby.infura.io/v3/79f047cd8b7e45a894ecd94adc4bc678'
)
const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()

  console.log('Attempting to deploy from account 0: ', accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x' + bytecode})
    .send({gas: 1000000, from: accounts[0]})

  console.log('Contract deployed to: ', result.options.address)
}
deploy()
