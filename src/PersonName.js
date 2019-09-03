import React from 'react';

const PersonName = ({key, person, isSelected, onClick}) => {
    return (
        <div key={person.id}
            onClick={onClick}
        >
           #
           <span>{person.name}</span> 
        </div>
    )
}

export default PersonName;