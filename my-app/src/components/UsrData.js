import React from 'react'

function UsrData(props) {
  return (
    <div>
        <h1>{props.isLoaded ? 'Data loaded!' : 'Loading ...'}</h1>
    </div>
  )
}

export default UsrData