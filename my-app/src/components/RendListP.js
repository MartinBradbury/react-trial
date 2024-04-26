import React from 'react'
import RendListC from './RendListC'

function RendListP() {
    const people = [
        {
            name: "Martin",
            age: 21,
            sex: "Male"
        },
        {
            name: "Donna",
            age: 40,
            sex: "Female"
        },
        {
            name: "Robert",
            age: 16,
            sex: "Male"
        },
        {
            name: "Jacob",
            age: 12,
            sex: "Male"
        },
        {
            name: "Oliver",
            age: 5,
            sex: "Male"
        }
    ]



  return (
    <div>
        {
            people.map( ppl => {
                return (
                    <RendListC people={ppl} />
                )
            })
        }
    </div>
  )
}

export default RendListP