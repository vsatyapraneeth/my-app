import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
   
    return  (this.state.isLoggedIn) &&  //shortcircuit operator
          <h1>Welcome Praneeth</h1>
  }
}

export default UserGreeting
