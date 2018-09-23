import React, { Component } from 'react'

import {BigNumber} from 'bignumber.js';

class Calculator extends Component {
  constructor(props){
    super(props)

    this.state = {
      wei: '',
      ether: '',
      kether: ''
    }

    this.updateStateFromWei = this.updateStateFromWei.bind(this)
  }
  updateStateFromWei(wei){
    this.setState(
      {
        wei: BigNumber(wei),
        ether: BigNumber(wei/Math.pow(10,18)),
        kether: BigNumber(wei/Math.pow(10,21))
      }
    )
  }

  fromEthToWei(eth){
    return BigNumber(eth * Math.pow(10,18))
  }

  fromKethToWei(keth){
    return BigNumber(this.fromEthToWei(keth) * 1000)
  }

  onInputChange(value, type){
    console.log(type);
    let wei = value;
    if(type == 'ether'){
      wei = BigNumber(this.fromEthToWei(value));
    }
    if(type == 'kether'){
      wei = BigNumber(this.fromKethToWei(value));
    }
    console.log(value);
    console.log(wei);
    BigNumber(this.updateStateFromWei(wei));
  }




  render(){
    return(
      <div>
        <div className="col-xs-8">Wei
        </div>
        <div className="col-xs-4">
          <input id="wei" type="number" value={this.state.wei}
            onChange = {event => this.onInputChange(event.target.value, 'wei')} />
        </div>

        <div className="col-xs-8">Ether
        </div>
        <div className="col-xs-4">
          <input id="ether" type="number" value={this.state.ether}
            onChange = {event => this.onInputChange(event.target.value, 'ether')}/>
        </div>

        <div className="col-xs-8">Kether, Grand,Einstein

        </div>
        <div className="col-xs-4">
          <input id="Kether" type="number" value={this.state.kether}
            onChange = {event => this.onInputChange(event.target.value, 'kether')}/>
        </div>
      </div>
    )
  }
}

export default Calculator
