import React, {Component} from 'react'
import {Textfit} from 'react-textfit'
import {Button} from 'semantic-ui-react'

export default class Ball extends Component {
  state = {
    clicked: false
  }

  onClick = () => {
    this.setState({clicked: true})
    this.props.loadMessage()
  }
  render(){
    return(
      <div className="ball">
        <div className="white-center" onClick={this.onClick}>
          <div className="text-container">
            <Button
              style={ this.state.clicked ? { display:'none'} : {display : 'block'} }
              >
              Display Text of the Day
            </Button>
            <Textfit
              style={ this.state.clicked ? { display:'block'} : {display : 'none'} }
              mode="multi"
              >
              {this.props.message}
            </Textfit>
          </div>
        </div>
      </div>
    )
  }
}
