import React from 'react'

function RenderingListPracChild(props) {
    const char = props.characters
  return (
        
    <div>
        <h5>{char.character}</h5>
        <p>{char.faction}</p>
        <p>{char.age}</p>
    </div>
  )
}

export default RenderingListPracChild