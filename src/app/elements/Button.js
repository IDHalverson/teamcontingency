import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const ButtonStyle = { marginLeft: "5%" };

const Button = ({ label, onClick, props, style, backgroundColor }) => (
  <RaisedButton
    style={{ ...ButtonStyle, ...style }}
    backgroundColor={backgroundColor}
    label={label}
    onClick={onClick}
    {...props}
  />
);

export default Button;
