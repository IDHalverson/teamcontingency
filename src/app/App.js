import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Grid from "material-ui/Grid";

import AuthorizedUser from "./components/AuthorizedUser";
import PrimaryUser from "./components/PrimaryUser";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid alignItems="flex-start" direction="row" justify="center">
          <Router>
            <Switch>
              <Route exact path="/:id" component={PrimaryUser} />
              <Route exact path="/authorized/:id" component={AuthorizedUser} />
              <Route exact path="/:primaryId/:id" component={AuthorizedUser} />
            </Switch>
          </Router>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
