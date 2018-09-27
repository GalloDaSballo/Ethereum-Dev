import web3 from './web3'
import contract from './build/TheBall.json'

const instance = new web3.eth.Contract(
  JSON.parse(contract.interface),
  '0xe5649c4D034039d8fd38EF58f76Fc3823fa4399a'
)
export default instance
