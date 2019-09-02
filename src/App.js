import React from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';

class App extends React.Component {
    state = {
        channels : [
            { id: 1, name: 'react', messages: []},
            { id: 2, name: 'redux', hasUnreads: true, messages: [] },
            { id: 3, name: 'mobx', messages: [] },
            { id: 4, name: 'react-router', messages: []}
        ],
          people : [
            { id: 1, name: 'Dave' },
            { id: 2, name: 'Sarah' },
            { id: 3, name: 'Zack' },
            { id: 4, name: 'Pam' },
            { id: 5, name: 'Erin' },
            { id: 6, name: 'Joe' }
          ],
        messagesbyChannelId: null,
        messagesbyPersonId: null,
        selectedChannelId: null,
        selectedPersonId: null
        }

    handleChannelSelected = (channelId) => {
        this.setState({
            selectedChannelId: channelId,
            selectedPersonid: null
        });
    }

    render() {

    //Logic to pass messages down as props. 
    
    let messages = [];
    let isSomethingSelected = false;
    
    if(this.state.selectedChannelId) {
        messages = this.state.channels.messages[this.state.selectedChannelId];
        isSomethingSelected = true;
    }
    /*if(this.state.selectedPersonId) {
        messages = this.state.messagesbyPersonId[this.state.selectedPersonId];
        isSomethingSelected = true;
    }*/
    else isSomethingSelected = false;
    

    
        return (
            <div className="container">
                <Sidebar
                    channels={this.state.channels}
                    people={this.state.people}
                    selectedChannelId={this.state.selectedChannelId}
                    selectedPersonId={this.state.selectedPersonId}
                    onChannelSelected={this.handleChannelSelected}
                    />
                {isSomethingSelected ?
                <Chat
                messages={messages}
                />
                : 
                <div>Empty Chat</div>
                }
            </div>
        );
    }
}

export default App;