import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const customStyle = { marginLeft: "5%" };

const Button = ({ label, onClick, style }) => (
  <RaisedButton
    style={{ ...customStyle, ...style }}
    label={label}
    onClick={onClick}
  />
);

export default Button;
