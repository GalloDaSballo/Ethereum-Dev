/**
 * Show a list of requests to the user
 */
import React, {Component} from 'react'
import Layout from '../../../components/layout'
import {Button} from 'semantic-ui-react'
import {Link} from '../../../routes'
import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'


class RequestIndex extends Component{
  static async getInitialProps(props){
    const {address} = props.query

    const campaign = Campaign(address)
    const numberOfRequests = await campaign.methods.getRequestsCount().call()
    console.log(numberOfRequests)
    let requests = []
    for(let i = 0; i<numberOfRequests; i++){
      console.log("In the loop")
      const request = await campaign.methods.requests(i).call()
      requests[i] = {
        description: request[0],
        value: web3.utils.fromWei(request[1], 'ether'),
        recipient: request[2],
        complete: request[3],
        approvalCount: request[4]
      }
    }
    return {
      requests: requests,
      address: address
    }
  }

  displayRequests(){
    if(!!this.props.requests){
      console.log("request exists")
      return this.props.requests.map(request => {
        <div>
          <p>WTF</p>
          <li>{request.description}</li>
          <li>{request.recipient}</li>
          <li>{request.value}</li>
          <li>{request.approvalCount}</li>
        </div>
      })
    }

  }
  render(){
    return(
      <Layout>
        <h3>Request List</h3>
        <ul>
          {this.displayRequests()}
        </ul>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>
      </Layout>
    )
  }
}

export default RequestIndex
