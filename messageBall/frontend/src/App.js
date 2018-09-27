import React, { Component } from 'react';
import './App.css';
import  instance from './ethereum/rinkeby' //instance of the contract on rinkeby
import {Form, Input, Button, Message} from 'semantic-ui-react'
import web3 from './ethereum/web3'

class App extends Component {
  state = {
    message: 'Loading The Message',
    errorMessage: '',
    formMessage: '',
    contribution: 0.002,
    loadingMessage: false,
    loadingContribution: false
  }
  updateMessage = async () => {
    const message = await instance.methods.message().call()
    this.setState({message})
  }
  async componentDidMount(){
    console.log(instance)
    this.updateMessage()
  }
  onClick = async () => {
    this.setState({loadingMessage: true})
    this.updateMessage()
    this.setState({loadingMessage: false})
  }

  onSubmit = async () => {
    this.setState({loadingContribution: true})
    try{
      const accounts = await web3.eth.getAccounts()
      await instance.methods
        .changeMessage(this.state.formMessage)
        .send({
          from: accounts[0],
          value: web3.utils.toWei(this.state.contribution.toString(), 'ether')
        })
        this.updateMessage()
    } catch(err){
      this.setState({errorMessage: err.message})
    }
    this.setState({loadingContribution: false})
  }

  render() {
    return (
      <div className="App">
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
          <Button loading={this.state.loadingMessage} onClick={this.onClick}>Update the Message</Button>
          <p>The Message: {this.state.message}</p>
          <hr />
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
                <label>Write a new message</label>
                <Input
                  value={this.state.formMessage}
                  onChange={event => this.setState({formMessage: event.target.value})}
                  name="Submit a Message"
                />
            </Form.Field>
            <Form.Field>
              <label>Make a small contribution</label>
              <Input
                type="number"
                value={this.state.contribution}
                onChange={event => this.setState({contribution: event.target.value})}
                name="Contribution"
                label="ether"
                labelPosition="right"
              />
            </Form.Field>
            <Button loading={this.state.loadingContribution} primary>Let's change the thingy</Button>
            <Message error header="Woops! Error" content={this.state.errorMessage} />
          </Form>
      </div>
    );
  }
}

export default App;
