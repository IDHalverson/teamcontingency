import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AuthorizedUser from "./components/AuthorizedUser";
import PrimaryUser from "./components/PrimaryUser";
import Settings from "./components/Settings";

import Button from "./elements/Button";
import FullPane from "./elements/FullPane";
import HalfPane from "./elements/HalfPane";
import SettingCard from "./elements/SettingCard";
import TextField from "material-ui/TextField";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/:id" component={PrimaryUser} />
            <Route exact path="/:id/settings" component={Settings} />
            <Route exact path="/authorized/:id" component={AuthorizedUser} />
            <Route exact path="/:primaryId/:id" component={AuthorizedUser} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
