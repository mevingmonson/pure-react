import React, { useState } from 'react'

const Person = (props) => {
    const [personState, setPersonState] = useState({
        persons: [
            { name: 'Mevin', age: 24 },
            { name: 'John', age: 23 }
        ]
    });

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                { name: 'Mevin G', age: 34 },
                { name: 'Johny Mon', age: 33 }
            ]
        });
        console.log(personState)
    }

    return (
        <div>
            {console.log('render', personState)}
            <button onClick={switchNameHandler}>Switch Names</button>
            <p>Name:{personState.persons[0].name} &emsp; Age:{personState.persons[0].age}</p>
            <p>Name:{personState.persons[1].name} &emsp; Age:{personState.persons[1].age}</p>
        </div>
    )
}

export default Person
