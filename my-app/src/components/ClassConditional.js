import React, { Component } from 'react'

export class ClassConditional extends Component {
    constructor(props) {
      super(props)
      this.state = {
         heading: "Welcome to the site",
         buttonText: "Enter",
         counter: 0,
         IntroMessage: true,
      }
    }

    myClick = () => {
        this.setState((prevState) => ({
            heading: prevState.heading === "Welcome to the site" ? "Goodbye" : "Welcome to the site",
            buttonText: prevState.buttonText === "Enter" ? "Exit" : "Enter",
            IntroMessage: prevState.IntroMessage === true ? false : true,
        }), () => {
            console.log(this.state.heading)
        });
    }





  render() {
    return (
      <div>
        <h1>{this.state.heading}</h1>
        <button onClick={(this.myClick)}>{this.state.buttonText}</button>
        {this.state.IntroMessage ? (
            <div>
                <p>Please Enter</p>
            </div>
        ) : (
            <div>
                <p>GoodBye</p>
            </div>
        )}
      </div>
    )
  }
}

export default ClassConditional