import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from "material-ui/Grid";

import AuthorizedUser from "./components/AuthorizedUser";
import PrimaryUser from "./components/PrimaryUser";

import Button from "./elements/Button";
import FullPane from "./elements/FullPane";
import HalfPane from "./elements/HalfPane";
import SettingCard from "./elements/SettingCard";
import TextField from "material-ui/TextField";

class App extends Component {
  render() {
    return (
      <Grid container alignItems="flex-start" direction="row" justify="center">
        <Router>
          <Switch>
            <Route exact path="/:id" component={PrimaryUser} />
            <Route exact path="/authorized/:id" component={AuthorizedUser} />
            <Route exact path="/:primaryId/:id" component={AuthorizedUser} />
          </Switch>
        </Router>
      </Grid>
    );
  }
}

export default App;
