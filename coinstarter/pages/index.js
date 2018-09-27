import React, {Component} from 'react'
import factory from '../ethereum/factory'
import {Card} from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import Layout from '../components/layout'
import {Link} from '../routes'

class CampaignIndex extends Component{
  //Next wants the initial data without having to render the component
  //Hence it wants the static function
  static async getInitialProps(){
    const campaigns = await factory.methods.getDeployedCampaigns().call()
    //Now campaigns is fetched in the server and passed on the frontend
    return {campaigns}
  }

  renderCampaigns(){
    const items = this.props.campaigns.map(address => {
      return{
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true //Makes the components get fluid
      }
    })
    return <Card.Group items={items} />
  }
  render(){
    return(
      <div>
        <Layout>
          <div>
            <h2>Open Campaigns</h2>
            {/* Primary will get turned into primary='true' */}
            <Link route="/campaigns/new">
            <a>
              <Button floated="right" content='Create Campaign' icon='add' primary />
            </a>
            </Link>
            <div>{this.renderCampaigns()}</div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default CampaignIndex
