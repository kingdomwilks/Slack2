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
          this.props.onSendMessage(this.state.value);
          this.setState({
            value: ''
        })
        }
      }
    
      handleClick = (event) => {
        this.props.onSendMessage(this.state.value);
        this.setState({
          value: ''
        })
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
            <button className="input-button" onClick={this.handleClick}>Send</button>
        </div>
        );
    }
}

export default ChatInput;