import React, { Component } from 'react'
import StatefulGreetingWithPrevState from './StatefulGreeting';

export class Stateful extends Component {
    constructor(props) {
      super(props)
      this.state = {
        heading: "Test",
        buttonText: "enter",
        count: 0,

      };
    }

    theClick = () => {
        this.setState((prevState => ({
            heading: prevState.heading === "Test" ? "Passed" : "Test",
            buttonText: prevState.buttonText === "enter" ? "exit" : "enter",
        }))
    )};

    Counter = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }), () => {
            console.log(this.state.count);
        });
    }





  render() {
    return (
      <div>
        <h1>{this.state.heading}</h1>
        <button onClick={(this.theClick)}>{this.state.buttonText}</button>
        <button onClick={(this.Counter)}>{this.state.count}</button>
      </div>
    )
  }
}

export default Stateful