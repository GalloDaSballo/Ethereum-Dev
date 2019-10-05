import React, { Component } from 'react';
import './App.css';
import  instance from './ethereum/rinkeby' //instance of the contract on rinkeby
import {Form, Input, Button, Message, Container, Modal} from 'semantic-ui-react'
import web3 from './ethereum/web3'
import Ball from './ball'

class App extends Component {
  state = {
    message: 'Loading The Message',
    errorMessage: '',
    formMessage: '',
    contribution: 0.002,
    loadingMessage: false,
    loadingContribution: false,
    isModalOpen: false
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
    console.log("Update message")
    this.setState({loadingContribution: true})
    try{
      const accounts = await web3.eth.getAccounts()
      if(accounts){
        await instance.methods
          .changeMessage(this.state.formMessage)
          .send({
            from: accounts[0],
            value: web3.utils.toWei(this.state.contribution.toString(), 'ether')
          })
          this.updateMessage()
      } else {
        throw "No accounts. You need to login to metamask"
      }
    } catch(err){
      this.setState({errorMessage: err.message})
    }
    this.setState({loadingContribution: false})
    this.setState({isModalOpen: false})
  }

  openModal = () => {
    this.setState({errorMessage: ''})
    this.setState({isModalOpen: true})
  }

  closeModal = () => {
    this.setState({isModalOpen: false})
  }

  render() {
    return (
      <Container>
        <h1>The Ball</h1>
        <h3>Powered by Ethereum</h3>
        <Ball message={this.state.message} loadMessage={this.onClick}/>

        <p>This ball shows a single and unique message coming from the ethereum blockchain </p>
        <p>To change the text, use this button and fill the form <Button onClick={this.openModal} primary>Change the Text</Button></p>
        <Button className="showModal" primary onClick={this.openModal}>Change the Text</Button>
        <Modal open={this.state.isModalOpen} closeOnDocumentClick={true} onClose={this.closeModal}>
          <Modal.Header>Change the Text</Modal.Header>
          <Modal.Content>
            <Modal.Description>
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
            </Modal.Description>
          </Modal.Content>
        </Modal>


      </Container>
    );
  }
}

export default App;
