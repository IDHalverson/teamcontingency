import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const style = { marginLeft: "5%" };

const Button = ({ label, onClick, props }) => (
  <RaisedButton style={style} label={label} onClick={onClick} {...props} />
);

export default Button;
