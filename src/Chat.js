import React from 'react';

const Chat = (props) => {
    console.log(props);
    return (
        <div>
            {props.messages[0]}
        </div>
    )
}

export default Chat;