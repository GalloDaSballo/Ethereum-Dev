import React, {Component} from 'react'
import Layout from '../../../components/layout'
import {Form, Button, Message, Input} from 'semantic-ui-react'
import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'
import {Link, Router} from '../../../routes'

class RequestNew extends Component{
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: ''
  }
  static async getInitialProps(props){
    const {address} = props.query

    return {address}
  }

  onSubmit = async event => {
    event.preventDefault()
    this.setState({loading: true, errorMessage: ''})

    const campaign = Campaign(this.props.address)
    const {description, value, recipient} = this.state

    try{
      const accounts = await web3.eth.getAccounts()
      //description, wei value, address
      await campaign.methods.createRequest(
        description,
        web3.utils.toWei(value, 'ether'),
        recipient
      ).send({from: accounts[0]})
      Router.pushRoute(`/campaigns/${this.props.address}/requests`)
    }catch(err){
      this.setState({errorMessage: err.message})
    }
    this.setState({loading: false})
  }
  render(){
    return(
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>
              Back
          </a>
        </Link>
        <h3>Create a Request</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              onChange={event => this.setState({description: event.target.value})}
              value={this.state.description}/>
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input
              onChange={event => this.setState({value: event.target.value})}
              value={this.state.value}/>
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input
              onChange={event => this.setState({recipient: event.target.value})}
              value={this.state.recipient}/>
          </Form.Field>
          <Message error header="Woops! Error" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>Create Request</Button>
        </Form>
      </Layout>
    )
  }
}

export default RequestNew
