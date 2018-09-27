import React, {Component} from 'react'
import {Form, Input, Message, Button} from 'semantic-ui-react'
import Campaign from '../ethereum/campaign'
import web3 from '../ethereum/web3'
import {Router} from '../routes'

class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  }

  onSubmit = async (event) => {
    event.preventDefault()
    //We receive the address from show.js as props
    const campaign = Campaign(this.props.address)
    // console.log("campaign ", campaign)
    this.setState({loading: true, errorMessage: ''})
    try{
      const accounts = await web3.eth.getAccounts()
      // console.log("Accounts ", accounts)
      const result = await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      })
      // console.log("Result ", result)
    } catch(err){
      console.log(err)
      this.setState({errorMessage: err.message})
    }
    this.setState({value: 0, loading: false})
    //Just refresh the page
    Router.replaceRoute(`/campaigns/${this.props.address}`)
  }

  render(){
    return(
      <div>
        <h3>Contribute to this Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Amount to contribute</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({value: event.target.value})}
              label="ether"
              labelPosition="right" />
          </Form.Field>
          <Message error header="Woops! Error" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Contribute!
          </Button>
        </Form>
      </div>
    )
  }
}

export default ContributeForm
