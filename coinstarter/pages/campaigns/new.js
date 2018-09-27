import React, {Component} from 'react'
import Layout from '../../components/layout'
import {Form, Input, Button, Message} from 'semantic-ui-react'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {Router} from '../../routes'

class CampaignNew extends Component{
  state = {
    minimumContribution : '',
    errorMessage : '',
    loading: false
  }

  /* With this syntax this is already binded */
  onSubmit = async (event) => {
    event.preventDefault()
    this.setState({errorMessage : '', loading: true})
    try{
      const accounts = await web3.eth.getAccounts()
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          //Metamask will automatically calculate the gas fee
          from: accounts[0]
        })
    } catch(err){
      this.setState({errorMessage: err.message})
    }
    this.setState({loading: false})
    Router.pushRoute('/')
  }

  render(){
    return(
      <Layout>
        <h3>Create a Campaign</h3>
        {/*Pass a reference to the function so the form can call it when submitted */}
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              value={this.state.minimumContribution}
              onChange={event => this.setState({minimumContribution: event.target.value})}
              label="wei" labelPosition="right" name="minimum"/>
          </Form.Field>
          <Message error header="Woops! Error" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Create Campaign</Button>
        </Form>
      </Layout>
    )
  }
}

export default CampaignNew
