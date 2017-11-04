import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AuthorizedUser from "./components/AuthorizedUser";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={AuthorizedUser} />
      </Router>
    );
  }
}

export default App;
