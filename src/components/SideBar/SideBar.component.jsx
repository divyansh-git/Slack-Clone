import React from 'react';
import { Menu } from 'semantic-ui-react';
import UserInfo from "./UserInfo/UserInfo.component";
import Channel from "./Channels/channels.component"
import PrivateChat from "./PrivateChat/PrivateChat.component"
import FavouriteChannels from "./favouriteChannels/favouriteChannels.component"
import "./SideBar.css";


export const SideBar = () => {
    return (<Menu vertical fixed="left" borderless size="large" className="side_bar">
        <UserInfo />
        <PrivateChat/>
        <FavouriteChannels/>
        <Channel/>
        
    </Menu>
    )
}