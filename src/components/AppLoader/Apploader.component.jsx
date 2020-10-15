import React from "react";
import "./Apploader.css";
import {Dimmer, Loader} from "semantic-ui-react" 

const Apploader=(props)=>{
return(<Dimmer active={props.loading}>
    <Loader size="huge" content="loading..."/>
</Dimmer>) 
}
export default Apploader;