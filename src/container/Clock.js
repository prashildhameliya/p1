import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            time:new Date()
        }
        console.log(" 1 constructor")
    }

    tick = () =>{
        console.log("tick");
        this.setState({
            time:new Date()
        })
    }

    componentDidMount = () => {
        console.log("3 componentDidMount");
        this.timerId = setInterval (() => this.tick(),1000)
    }

    componentDidUpdate = () => {
        console.log("4 componentDidUpdate")
    }

    componentWillUnmount = () =>{
        console.log("componentWillUnmount");
        clearInterval(this.timerId)
    }

  render() {
      console.log("2 render")
    return (
      <div><center><h1>{this.state.time.toLocaleTimeString()}</h1></center></div>
    )
  }
}
