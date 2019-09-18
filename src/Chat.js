import React from 'react';
import ChatInput from './ChatInput';
import MessageList from './MessageList';
import ChatMessageAndInput from './ChatMessageAndInput';

const Chat = ({messages, channels, selectedChannelId, selectedPersonId, people, onSendMessage}) => {
    
    //console.log(props);
    console.log('selected channel id', selectedChannelId);

        if(selectedChannelId == null){
            return (
                <div className="chat">
                    <div className="chat-header">
                    #{people[selectedPersonId-1].name}
                    </div>
                <ChatMessageAndInput
                    messages={messages}
                    onSendMessage={onSendMessage}
                />
                </div>
            )
        }
        else if (selectedPersonId == null){
            return (
            <div className="chat">
                <div className="chat-header">
                #{channels[selectedChannelId-1].name}
                </div>
                <ChatMessageAndInput
                    messages={messages}
                    onSendMessage={onSendMessage}
                />
            </div>
            )
        }
        else return (
            <div className="chat">
                <div className="chat-header">
                Select a channel buddy!
                </div>
                
            </div>
        );
    }



export default Chat;

// Non functional code ---> {props.channels[props.selectedChannelId - 1].name}
//If props.selectedChannelId is console logged to be 1, why is this different to channels[0].name which works?