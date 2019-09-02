import React from 'react';

const PersonName = ({key, person, isSelected}) => {
    return (
        <div key={person.id}>
           #
           <span>{person.name}</span> 
        </div>
    )
}

export default PersonName;