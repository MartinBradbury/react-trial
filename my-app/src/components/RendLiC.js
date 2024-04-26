import React from 'react'

function RendLiC(props) {
    const ani = props.animals

  return (
    <div>
        <h2>{ani.name}</h2>
        <p>{ani.species}</p>
        <p>{ani.age}</p>
        <hr />
    </div>
  )
}

export default RendLiC