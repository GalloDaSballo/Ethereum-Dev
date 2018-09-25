import React, {Component} from 'react'
import factory from '../ethereum/factory'

class CampaignIndex extends Component{
  async componentDidMount(){
    const campaigns = await factory.methods.getDeployedCampaigns().call()

    console.log(campaigns)
  }

  render(){
    return(
      <div>
        <h1>Campaigns Index!</h1>
      </div>)
  }
}

export default CampaignIndex
