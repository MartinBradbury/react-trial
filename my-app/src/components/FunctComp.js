import React from 'react'

function FunctComp(props) {
  return (
    <div>
        <h1>This is a test</h1>
        <p>{props.loggedIn ? "Yes" : "No"}</p>
    </div>
  )
}

export default FunctComp