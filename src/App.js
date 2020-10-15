import React from "react";
import {SideBar} from "./components/SideBar/SideBar.component";
import MessageComponent from "./components/Messages/Messages.component";
import "./components/SideBar/SideBar.css";
import { GridColumn, Grid } from "semantic-ui-react";
import "./App.css";
let App=()=>
{
  return (
    <Grid columns="equal">
        <SideBar/>
        <Grid.Column className="messagepanel">
        <MessageComponent/>
        </Grid.Column> 
        <Grid.Column width={3}>
          <span>

          </span>
        </Grid.Column>
    </Grid>
  );
}
export default App;
