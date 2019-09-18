import React from 'react';

const MessageItem = ({message, key}) => {
    return (
        <div className="message">
            {message}
        </div>
    )
}

export default MessageItem;