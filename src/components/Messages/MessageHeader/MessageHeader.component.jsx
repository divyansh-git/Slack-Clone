import React from "react";
import {Header,Segment,Input,Icon} from "semantic-ui-react";
const MessageHeader=(props)=>{
    return(
      <Segment clearing>
            <Header floated="left" fluid="true" as="h2"> 
                <span>
                   {[props.channelName]}
                   {!props.isPrivateChat && <Icon onClick={props.starChange}
                    name={props.starred ?"star" :"star outline" }
                    color={props.starred? "yellow":"black"} /> } 
                </span>
                <Header.Subheader>{props.uniqueUsers} User{props.uniqueUsers===1? "" :"s"}</Header.Subheader>
            </Header>
            <Header floated="right">    
                <Input 
                name="search" 
                icon="search" 
                placeholder="search messages"
                size="mini"
                onChange={props.searchTermChange}/>
            </Header>
      </Segment>
    );
}
export default MessageHeader;