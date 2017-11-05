import React from "react";
import Card, { CardText } from "material-ui/Card";
import TextField from "material-ui/TextField";
import { CapOneGray, CapOneBlue } from "../../colors";
import Button from "./Button";

const SettingCard = () => (
  <Card style={{ backgroundColor: CapOneGray }}>
    <CardText style={{ color: CapOneBlue }}>
      Current value is {<TextField />}
      <Button style={{ float: "right" }} label={"Save"} />
    </CardText>
    <CardText style={{ color: CapOneBlue }}>
      Current value is {<TextField />}
      <Button style={{ float: "right" }} label={"Save"} />
    </CardText>
    <CardText style={{ color: CapOneBlue }}>
      Current value is {<TextField />}
      <Button style={{ float: "right" }} label={"Save"} />
    </CardText>
    <CardText style={{ color: CapOneBlue }}>
      Current value is {<TextField />}
      <Button style={{ float: "right" }} label={"Save"} />
    </CardText>
  </Card>
);

export default SettingCard;
