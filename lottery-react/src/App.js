import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import web3 from './web3'
import lottery from './lottery'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {manager: ''}
  }
  //Called after the component is first rendered
  async componentDidMount(){
    //.call requires no specification of the account cause we have the metamask default account
    const manager = await lottery.methods.manager().call()

    this.setState({manager})
  }
  render() {
    console.log(web3.version)
    web3.eth.getAccounts()
      .then(console.log)
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by: {this.state.manager}</p>
      </div>
    );
  }
}

export default App;
