import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import Theme from "./theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route path="/">
      <Theme>
        <App />
      </Theme>
    </Route>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
