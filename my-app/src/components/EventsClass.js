import React, { Component } from 'react'

export class EventsClass extends Component {
    clickMe() {
        console.log("i been clicked")
    };


  render() {
    return (
      <div>
        <button onMouseOver={this.clickMe}>Click me - Class Component</button>
      </div>
    )
  }
}

export default EventsClass