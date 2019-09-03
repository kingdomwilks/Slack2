import React from 'react';
import ChannelList from './ChannelList';
import PeopleList from './PeopleList'

const Sidebar = (props) => {
    console.log(props);
    return (
        <div className="sidebar">
            <ChannelList
                channels={props.channels}
                selectedId={props.selectedChannelId}
                onChannelSelected={props.onChannelSelected}
            />
            <PeopleList
                people={props.people}
                selectedId={props.selectedPersonId}
                onPersonSelected={props.onPersonSelected}
            />
        </div>
    )
}

export default Sidebar;