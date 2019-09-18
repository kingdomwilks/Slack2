import React from 'react';
import MessageList from './MessageList'
import ChatInput from './ChatInput';

const ChatMessageAndInput = ({messages, onSendMessage}) => {
    return (
        <div>
            <MessageList
                messages={messages}
            />
            <ChatInput
                onSendMessage={onSendMessage}
            />
        </div>
    )
}

export default ChatMessageAndInput;