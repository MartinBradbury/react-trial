import React, { Component } from 'react'

export class BeepOne extends Component {
    constructor(props) {
      super(props)
      this.state = {
         intro: "Beep, Beep",
         buttonText: "Honk",
         counter: 0,
      }
    }
  
    myBeep = () => {
        this.setState((prevState) => ({
            intro: prevState.intro === "Beep, Beep" ? "Bang, Bang" : "Beep, Beep",
            buttonText: prevState.buttonText === "Honk" ? "Beep" : "Honk",
        }), () => {
            console.log(this.state.intro);
            console.log(this.state.buttonText);
        });
    }

    clickCount = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 6 /2,
        }), () => {
            console.log(this.state.counter);
        });
    }
  
    render() {
    return (
      <div>
        <h1>This is a Beep {this.state.intro}</h1>
        <button onClick={this.myBeep}>{this.state.buttonText}</button>
        <button onClick={this.clickCount}>I have been beeped {this.state.counter} times.</button>
      </div>
    )
  }
}

export default BeepOne