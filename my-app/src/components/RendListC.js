import React from 'react'

function RendListC(props) {
    const ppl = props.people



  return (
    <div>
        <h1>Name: {ppl.name}</h1>
        <h4>Age: {ppl.age}</h4>
        <h4>Sex: {ppl.sex}</h4>
        <hr />
    </div>
  )
}

export default RendListC