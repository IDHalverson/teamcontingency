import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchUser } from "./utils/apiWrapper";

import CapOneLogo from "./elements/CapOneLogo";
import AuthorizedUser from "./components/AuthorizedUser";
import PrimaryUser from "./components/PrimaryUser";

import "./App.css";

// const thing = async () => {
//   let res = await fetchUser(100710000);
//   console.log(res);
// };
//
// thing();

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CapOneLogo />
          <Switch>
            <Route exact path="/:id" component={PrimaryUser} />
            <Route exact path="/authorized/:id" component={AuthorizedUser} />
            <Route exact path="/:primaryId/:id" component={AuthorizedUser} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
