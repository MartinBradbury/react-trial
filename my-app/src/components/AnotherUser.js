import React, { Component } from 'react'

export class AnotherUser extends Component {
    constructor(props) {
      super(props);
      this.state = {
         greeting: "welcome",
         buttonText: "Hello",
         counter: 0,
      }
    }


    thisClick() {
        this.setState((prevState) => {
            return {
                greeting: prevState.greeting === "Welcome" ? "Goodbye" : "Welcome",
                buttonText: prevState.buttonText === "Hello" ? "Goodbye" : "Hello",
                counter: prevState.counter + 1,
            };

        })
    }

    // Number() {
    //     this.setState (prevState => ({
    //         counter: prevState.counter + 1,
    //     }));
    // }


  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={() => this.thisClick()}>{this.state.buttonText}{this.state.counter}</button>
      </div>
    )
  }
}

export default AnotherUser