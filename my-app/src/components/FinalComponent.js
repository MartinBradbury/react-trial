import React, { Component } from 'react'

export class FinalComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
         intro: "Welcome",
         buttonText: "Enter",
         counter: 0,
         loggedIn: false,
      };
    }

    myClick = () => {
        this.setState((prevState) => ({
            intro: prevState.intro === "Welcome" ? "Goodbye" : "Welcome",
            buttonText: prevState.buttonText === "Enter" ? "Exit" : "Enter",
            loggedIn: prevState.loggedIn === false ? true : false,
        }), () => {
            console.log(this.state.intro);
            console.log(this.state.buttonText);
        });
    }

    counter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }), () => {
            console.log(this.state.counter);
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.intro}</h1>
        <button onClick={this.myClick}>{this.state.buttonText}</button>
        <button onClick={this.counter}>{this.state.counter}</button>
        {this.state.loggedIn ? (
            <div>
              <h1>I am Logged in</h1>
            </div>
        ) : (
          <div>
            <h1>I am not logged in</h1>
          </div>
        )}
      </div>
    )
  }
}

export default FinalComponent