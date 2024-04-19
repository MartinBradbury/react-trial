import React from 'react'

function EventsFunctional() {
    function functionalClick() {
        console.log("I have been clicked")
    }


  return (
    <div>
        <button onClick={functionalClick}>Click me - Functional Component</button>
    </div>
  )
}

export default EventsFunctional