import React from 'react'

function EventsFunctional(props) {
    function functionalClick() {
        console.log("I have been clicked")
        
    }


  return (
    <div>
        <h1>{props.loggedIn ? "It worked" : "It did not work"}</h1>
        <button onClick={functionalClick}>Click me - Functional Component</button>
    </div>
  )
}

export default EventsFunctional