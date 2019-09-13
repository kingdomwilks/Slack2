import React from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';

class App extends React.Component {
    state = {
        channels : [
            { id: 1, name: 'react', messages: ['React message 1']},
            { id: 2, name: 'redux', hasUnreads: true, messages: ['Redux message 1'] },
            { id: 3, name: 'mobx', messages: ['mobx message 1'] },
            { id: 4, name: 'react-router', messages: ['react-router message 1']}
        ],
          people : [
            { id: 1, name: 'Dave', messages: ["Dave is a donkey", "Dave is a daddy"] },
            { id: 2, name: 'Sarah', messages: ["Sarah is sassy"] },
            { id: 3, name: 'Zack', messages: ["Zack is a zebra"] },
            { id: 4, name: 'Pam', messages: ["Pam is a panda"] },
            { id: 5, name: 'Erin', messages: ["Erin is evil"] },
            { id: 6, name: 'Joe', messages: ["Joe is the joker from Batman"] }
          ],
        messagesbyChannelId: null,
        messagesbyPersonId: null,
        selectedChannelId: null,
        selectedPersonId: null
        }

    handleChannelSelected = (channelId) => {
        this.setState({
            selectedChannelId: channelId,
            selectedPersonId: null
        });
    }

    handlePersonSelected = (personId) => {
        this.setState({
            selectedChannelId: null,
            selectedPersonId: personId
        });
    }

    render() {
    
    let messages = [];
    let isSomethingSelected = false;
    
    if(this.state.selectedChannelId) {
        messages = this.state.channels[this.state.selectedChannelId-1].messages;
        isSomethingSelected = true;
    }

    if(this.state.selectedPersonId) {
        messages = this.state.people[this.state.selectedPersonId-1].messages;
        isSomethingSelected = true;
    }
    else isSomethingSelected = false;

    console.log(messages);
    

    
        return (
            <div className="container">
                <Sidebar
                    channels={this.state.channels}
                    people={this.state.people}
                    selectedChannelId={this.state.selectedChannelId}
                    selectedPersonId={this.state.selectedPersonId}
                    onChannelSelected={this.handleChannelSelected}
                    onPersonSelected={this.handlePersonSelected}
                    />
                
                <Chat
                    channels={this.state.channels}
                    people={this.state.people}
                    messages={messages}
                    selectedChannelId={this.state.selectedChannelId}
                    selectedPersonId={this.state.selectedPersonId}
                    isSomethingSelected={this.isSomethingSelected}
                />
                
            </div>
        );
    }
}

export default App;