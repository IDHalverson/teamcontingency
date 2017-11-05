import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CapOneLogo from "./elements/CapOneLogo";
import AuthorizedUser from "./components/AuthorizedUser";
import PrimaryUser from "./components/PrimaryUser";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      month: 2
    };
  }

  nextMonth = () =>
    this.setState({
      month: this.state.month === 12 ? 1 : this.state.month + 1
    });

  prevMonth = () => this.setState({ month: this.state.month - 1 || 12 });

  componentDidMount() {
    window.addEventListener("keypress", event => {
      if (event.keyCode === 44) this.prevMonth();
      if (event.keyCode === 46) this.nextMonth();
    });
  }

  render() {
    return (
      <Router>
        <div>
          <CapOneLogo next={this.nextMonth} prev={this.prevMonth} />
          <Switch>
            <Route exact path="/:id">
              <PrimaryUser month={this.state.month} />
            </Route>
            <Route exact path="/authorized/:id">
              <AuthorizedUser month={this.state.month} />
            </Route>
            <Route exact path="/:primaryId/:id">
              <AuthorizedUser month={this.state.month} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
