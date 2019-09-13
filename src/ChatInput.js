import React from 'react';

class ChatInput extends React.Component {

    state = {
        value: ""
    }

    handleTyping = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (value) => {
        this.setState({
            value: ''
        })
    }

    handleKeyPress = (event) => {
        if(!this.state.value) {
          return;
        }
    
        if(event.key === 'Enter') {
          //this.props.onSendMessage(this.state.text);
          this.setState({
            value: ''
        })
        }
      }

    render() {
    return (
        <div className="chat-input">
            <input
                type="text"
                placeholder="Type here buddy..."
                value={this.state.value}
                onChange={this.handleTyping}
                onKeyPress={this.handleKeyPress}
            />
            <button onClick={this.handleSubmit}>Send</button>
        </div>
        );
    }
}

export default ChatInput;