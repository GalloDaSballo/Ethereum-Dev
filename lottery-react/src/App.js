import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import web3 from './web3'
import lottery from './lottery'


class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {manager: ''}
  // }
  // Es6 Refactor
  state = {
    manager: '',
    number_of_players: '',
    contract_balance: '',
    value: '',
    message: ''
  }
  //Called after the component is first rendered
  async componentDidMount(){
    web3.eth.getAccounts()
      .then(console.log)
    //.call requires no specification of the account cause we have the metamask default account
    const manager = await lottery.methods.manager().call()
    const players = await lottery.methods.getPlayers().call()


    const number_of_players = players.length

    const contract_wei_balance = await web3.eth.getBalance(lottery.options.address)
    const contract_balance = web3.utils.fromWei(contract_wei_balance,'ether')
    this.setState({manager})
    this.setState({number_of_players})
    this.setState({contract_balance})
  }

  //With this syntax we define a function that already has this binded
  formSubmit = async (event) => {
    event.preventDefault()

    const accounts = await web3.eth.getAccounts()

    this.setState({message: 'Awaiting network confirmation'})

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    })
    console.log("Successfully entered the lottery")
    this.setState({message: 'You are entered in the lottery!'})
  }
  clickWinner = async (event) => {
    event.preventDefault()

    const accounts = await web3.eth.getAccounts()
    this.setState({message: 'Awaiting network confirmation'})
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    })

    this.setState({message: 'A winner has been picked'})
  }
  render() {
    return (
      <div>
        <div id="top">
          <h2>Lottery Contract</h2>
          <p>This contract is managed by: {this.state.manager}</p>
          <p>Number of players: {this.state.number_of_players}</p>
          <p>Contract Balance: {this.state.contract_balance} Ether</p>
        </div>
        <div id="form">
          <form onSubmit={this.formSubmit}>
            <h1>Participate in the lottery</h1>
            <div>
              <label>Amount of ether to enter</label>
              <input
                value={this.state.value}
                onChange={event => this.setState({value: event.target.value})}
              />
              <button>Enter</button>
            </div>
          </form>
          <hr />
          <h2>Status: {this.state.message}</h2>
          <hr />
          <h2>Pick a winner</h2>
          <button onClick={this.clickWinner}>Pick a Winner</button>
        </div>
      </div>
    );
  }
}

export default App;
