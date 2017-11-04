import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AuthorizedUser from "./components/AuthorizedUser";
import PrimaryUser from "./components/PrimaryUser";
import Settings from "./components/Settings";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route
              exact
              path="/:id"
              component={() => <AuthorizedUser userIsPrimaryUser={false} />}
            />
            <Route
              exact
              path="/:id/:id"
              component={() => <AuthorizedUser userIsPrimaryUser={true} />}
            />
            <Route exact path="/:id" component={PrimaryUser} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
