import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const theme = {
  muiTheme: getMuiTheme({
    palette: {
      primary1Color: "#004975",
      primary2Color: "#D52833",
      primary3Color: "#0775AB",
      accent1Color: "#004975",
      accent2Color: "#D52833",
      accent3Color: "#0775AB",
      alternateTextColor: "#0775AB",
      disabledColor: "#E4E4E3",
      canvasColor: "#E4E4E3",
      pickerHeaderColor: "#004975",
      textColor: "#FFFFFF",
      borderColor: "#004975"
    }
  })
};

export default ({ children }) => (
  <MuiThemeProvider {...theme} children={children} />
);
