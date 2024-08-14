
import React, { Component } from 'react'

export class ClassClick extends Component {
    myClickHandler() {
        console.log('button click me was clicked')
    }
  render() {
    return (
        <button onClick={this.myClickHandler}>click me</button>
    )
  }
}

export default ClassClick
