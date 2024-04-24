import React from 'react'
import RenderingListPracChild from './RenderingListPracChild'

function RenderingListPracParent(props) {
    const characters = [
        {
            character: "Arthas",
            faction: "Alliance",
            age: 100
        },
        {
            character: "Jania",
            faction: "Alliance",
            age: 43
        },
        {
            character: "Thrall",
            faction: "Horde",
            age: 80
        },
    ]



  return (
    <div>
        {
            characters.map( char => {
                return <RenderingListPracChild characters={char} />
            })
        }
    </div>
  )
}

export default RenderingListPracParent