import React from 'react';
import ChatInput from './ChatInput';

const Chat = ({messages, channels, selectedChannelId}) => {
    
    //console.log(props);
    console.log(selectedChannelId);

    //Line 15: Your Channel = #{channels[0].name} - Works fine
    // But {channels[selectedChannelId - 1].name} - Won't work

    return (
        <div>
            <div>
            Your Channel = #{channels[0].name}
            <br></br>
            This is the channel name theoretically.
            <br></br>
            {messages[0]}
            <br></br>
            {messages[1]}
            </div>
            <ChatInput/>
        </div>
    );
}

export default Chat;

// Non functional code ---> {props.channels[props.selectedChannelId - 1].name}
//If props.selectedChannelId is console logged to be 1, why is this different to channels[0].name which works?