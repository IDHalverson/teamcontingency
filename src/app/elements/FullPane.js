import React from "react";
import Card, { CardHeader } from "material-ui/Card";

const style = {
  margin: "5%"
};

const FullPane = () => (
  <Card style={style}>
    <CardHeader title={"Full Pane"} />
  </Card>
);

export default FullPane;
