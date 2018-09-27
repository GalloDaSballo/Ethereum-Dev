/**
 * Exports the campaign factory instance
 */
import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3a70361e66a50c9Cf47f8adaB84c818b4e793d05'
)
export default instance
