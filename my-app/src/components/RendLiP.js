import React from 'react';
import RendLiC from './RendLiC';

function RendLiP() {
    const animals = [
        {
            name: "bodger",
            species: "Strange",
            age: 200
        },
        {
            name: "dave",
            species: "wonky",
            age: 50
        },
        {
            name: "smasah",
            species: "rawww",
            age: 5
        },
        {
            name: "wholloop",
            species: "lovelly",
            age: 41
        }
    ];

    return (
        <div>
            {
                animals.map(ani => {
                    return <RendLiC key={ani.name} animals={ani} />
                })
            }
        </div>
    );
}

export default RendLiP;
