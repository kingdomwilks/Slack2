import React from 'react';

const ChannelName = ({key, channel, isSelected, onClick}) => {
    return (
        <div key={channel.id}
            onClick={onClick}
        >
           #
           <span>{channel.name}</span> 
        </div>
    )
}

export default ChannelName;