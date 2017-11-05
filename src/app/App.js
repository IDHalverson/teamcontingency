import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthorizedUser from "./components/AuthorizedUser";
import PrimaryUser from "./components/PrimaryUser";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/:id" component={PrimaryUser} />
          <Route exact path="/authorized/:id" component={AuthorizedUser} />
          <Route exact path="/:primaryId/:id" component={AuthorizedUser} />
        </Switch>
      </Router>
    );
  }
}

export default App;
