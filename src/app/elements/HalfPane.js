import React from "react";
import Card, { CardHeader } from "material-ui/Card";

const style = {
  margin: "5%"
};

const HalfPane = () => (
  <Card style={style}>
    <CardHeader title={"Half Pane"} />
  </Card>
);

export default HalfPane;
