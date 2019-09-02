import React from 'react';
import ChannelName from './ChannelName';

const ChannelList = ({channels, selectedId, onChannelSelected}) => {
    return (
        <div>
            <h5>Channels</h5>
            {channels.map(channel => 
                <ChannelName
                    key={channel.id}
                    channel={channel}
                    isSelected={channel.id === selectedId}
                    onClick={() => onChannelSelected(channel.id)}
                />
            )}
        </div>
    );
}

export default ChannelList;