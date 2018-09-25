/**
 * Exports the campaign factory instance
 */
import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3c099D859AE0132c845A9b188362C8F16c94AD9a'
)
export default instance
