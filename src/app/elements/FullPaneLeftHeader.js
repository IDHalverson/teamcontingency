import React from "react";
import Card, { CardHeader, CardText } from "material-ui/Card";

const style = {
  margin: "5%"
};

const FullPaneLeftHeader = () => (
  <Card style={style}>
    <CardHeader title={"Full Pane Left Header"} />
    <CardText>Thanks for choosing Capital One!</CardText>
  </Card>
);

export default FullPaneLeftHeader;
