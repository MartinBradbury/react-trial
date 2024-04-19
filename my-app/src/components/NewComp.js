import React, { Component } from 'react'

export class NewComp extends Component {
    constructor(props) {
      super(props);
      this.state = {
         greeting: "hello",
         buttonText: "Martin",
         counter: 0,
      };
    }

    myClick() {
        this.setState((prevState) => ({
            greeting: prevState.greeting === "hello" ? "goodbye" : "hello",
            buttonText: prevState.buttonText === "Martin" ? "Michael" : "Martin",
        }), () => {
            console.log(this.state.greeting);
            console.log(this.state.buttonText);
        });
        }

    Number() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }), () => {
            console.log(this.state.counter)
        });
    }





  render() {
    return (
      <div>
        <h1>Computer says {this.state.greeting}</h1>
        <button onClick={() => this.myClick()}>{this.state.buttonText}</button>
        <button onClick={() => this.Number()}>I have been clicked {this.state.counter} times.</button>
      </div>
    )
  }
}

export default NewComp