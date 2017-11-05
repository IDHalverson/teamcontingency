import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { CapOneRed, CapOneBlue, CapOneBlue2, CapOneGray } from "./colors";

console.log(getMuiTheme());

const muiTheme = getMuiTheme({
  card: {
    titleColor: "#FFFFFF"
  },
  textField: {
    textColor: "#606A77"
  },
  palette: {
    primary1Color: CapOneBlue,
    primary2Color: CapOneRed,
    primary3Color: CapOneBlue2,
    accent1Color: CapOneBlue,
    accent2Color: CapOneRed,
    accent3Color: CapOneBlue2,
    alternateTextColor: CapOneBlue,
    disabledColor: CapOneGray,
    canvasColor: CapOneBlue,
    pickerHeaderColor: CapOneBlue,
    textColor: "#FFFFFF",
    borderColor: CapOneBlue
  }
});

export default ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme} children={children} />
);
