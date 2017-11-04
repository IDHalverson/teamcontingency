import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import Theme from "./theme";

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById("root")
);

registerServiceWorker();
