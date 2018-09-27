/**
 * Show a list of requests to the user
 */
import React, {Component} from 'react'
import Layout from '../../../components/layout'
import {Button, Table} from 'semantic-ui-react'
import {Link} from '../../../routes'
import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'
import RequestRow from '../../../components/requestRow'

class RequestIndex extends Component{
  static async getInitialProps(props){
    const {address} = props.query

    const campaign = Campaign(address)
    const requestsCount = await campaign.methods.getRequestsCount().call()
    const approversCount = await campaign.methods.approversCount().call()
    /** Issue all requests and resolve them all together */
    const requests = await Promise.all(
      //Array(4).fill().map((element,index) => { return index})
      //(4) [0, 1, 2, 3]
      Array(parseInt(requestsCount)).fill().map((element,index) => {
        return campaign.methods.requests(index).call()
      })
    )
    return {
      address,
      requests,
      requestsCount,
      approversCount
    }
  }

  renderRows(){
    return this.props.requests.map((request,index) => {
      return(
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          approversCount={this.props.approversCount}
        />
      )
    })
  }

  render(){
    //Destructuring the Table.Header, etc properties
    const{Header, Row, HeaderCell, Body} = Table
    return(
      <Layout>
        <h3>Request List</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{marginBottom: 10}}>Add Request</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>
                ID
              </HeaderCell>
              <HeaderCell>
                Description
              </HeaderCell>
              <HeaderCell>
                Amount
              </HeaderCell>
              <HeaderCell>
                Recipient
              </HeaderCell>
              <HeaderCell>
                Approval Count
              </HeaderCell>
              <HeaderCell>
                Approve
              </HeaderCell>
              <HeaderCell>
                Finalize
              </HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
        <div>Found: {this.props.requestsCount} requests.</div>
      </Layout>
    )
  }
}

export default RequestIndex
