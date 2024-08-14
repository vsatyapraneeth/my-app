import React, { Component } from 'react'

export default class Message extends Component {
  constructor(){
    super()
    this.state={
        msg:"Welcome Mr Visitor"
  }
  }

  changeMessage(){
    this.setState({msg: "Thankyou for Subscribing"})
  }

  render() {
    const{state1,state2}= this.state
    const{name,alias} = this.props
    return (
      <div>
        <div>this is destructed {name} and {alias}</div>
      <h1>{this.state.msg}</h1>
      <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
