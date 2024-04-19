import React, { Component } from 'react'

export class Test extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         intro: "Welcome",
         buttonText: "Enter",
         counter: 0,
      }
    }

    myClick() {
        this.setState((prevState) => ({
            intro: prevState.intro === "Welcome" ? "Goodbye" : "Welcome",
            buttonText: prevState.buttonText === "Enter" ? "Exit" : "Enter",
        }), () => {
            console.log(this.state.intro);
            console.log(this.state.buttonText);
        });
    }

    Number() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }), () => {
            console.log(this.state.counter)
        });
    }







  render() {
    return (
      <div>
        <h1>{this.state.intro}</h1>
        <button onClick={() => this.myClick()}>{this.state.buttonText}</button>
        <button onClick={() => this.Number()}>I have been clicked {this.state.counter} times.</button>
      </div>
    )
  }
}

export default Test