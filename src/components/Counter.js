import React, { Component } from 'react'

export class Counter extends Component {
   constructor(props){
     super(props)

     this.state={
        count: 0
     }
   }
   
   incrementCount(){
    // this.state.count = this.state.count + 1
    // this.setState({   //set state updates the state async
    //    count: this.state.count +1
    // }, () => {console.log("the state is "+this.state.count)}) 
    //console.log("the state is "+this.state.count) //sync
    this.setState(prevState =>({
        count: prevState.count+1
    }))
             
}
incrementthree(){
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
}
//painting the screen
render() {
return (
  <div>
    <div>Current count is  {this.state.count}</div>
    <button  onClick={() => this.incrementthree()}>increment</button>
  </div>
)
  }
}

export default Counter

