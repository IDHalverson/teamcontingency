import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

console.log(getMuiTheme());

const muiTheme = getMuiTheme({
  card: {
    titleColor: "#FFFFFF"
  },
  textField: {
    textColor: "#606A77"
  },
  palette: {
    primary1Color: "#004975",
    primary2Color: "#D52833",
    primary3Color: "#0775AB",
    accent1Color: "#004975",
    accent2Color: "#D52833",
    accent3Color: "#0775AB",
    alternateTextColor: "#0775AB",
    disabledColor: "#E4E4E3",
    canvasColor: "#004975",
    pickerHeaderColor: "#004975",
    textColor: "#FFFFFF",
    borderColor: "#004975"
  }
});

export default ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme} children={children} />
);
