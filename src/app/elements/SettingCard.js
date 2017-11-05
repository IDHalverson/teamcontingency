import React from "react";
import Card, { CardText, CardHeader } from "material-ui/Card";
import TextField from "material-ui/TextField";
import { CapOneGray, CapOneBlue, CapOneBlue2, CapOneRed } from "../../colors";
import Button from "./Button";

const style = { borderColor: CapOneBlue2 };

const CardTemplate = ({ children }) => (
  <Card style={{ backgroundColor: CapOneGray }}>
    <CardText style={{ color: CapOneBlue }}>
      {children}
      <Button style={{ float: "right" }} label={"Save"} />
    </CardText>
  </Card>
);

const Input = () => <TextField underlineFocusStyle={style} />;

const SettingCard = () => (
  <div>
    <CardTemplate>Current value is {<Input />}</CardTemplate>
    <CardTemplate>Current value is {<Input />}</CardTemplate>
    <CardTemplate>Current value is {<Input />}</CardTemplate>
    <CardTemplate>Current value is {<Input />}</CardTemplate>
  </div>
);

export default SettingCard;
