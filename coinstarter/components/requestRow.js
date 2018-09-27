import React, {Component} from 'react'
import {Table, Button} from 'semantic-ui-react'
import web3 from '../ethereum/web3'
import Campaign from '../ethereum/campaign'

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = Campaign(this.props.address)
    const accounts = await web3.eth.getAccounts()
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    })
  }

  onFinalize = async () => {
    const campaign = Campaign(this.props.address)
    const accounts = await web3.eth.getAccounts()
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0]
    })
  }

  render(){
    const {Row, Cell} = Table
    const {id, request, approversCount} = this.props
    const readyToFinalize = request.approvalCount >  approversCount/2
    console.log("Request #", id, " ready for finalize? ", readyToFinalize)
    return(
      <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
        <Cell>
          {id}
        </Cell>
        <Cell>
          {request.description}
        </Cell>
        <Cell>
          {web3.utils.fromWei(request.value, 'ether')}
        </Cell>
        <Cell>
          {request.recipient}
        </Cell>
        <Cell>
          {request.approvalCount} / {approversCount}
        </Cell>
        <Cell>
          {/* If the request is not complete then show it, else hide it */}
          {request.complete ? null : (
          <Button onClick={this.onApprove} color="green" basic>Approve</Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
          <Button onClick={this.onFinalize}color="teal" basic>Finalize</Button>
          )}
        </Cell>
      </Row>
    )
  }
}

export default RequestRow
