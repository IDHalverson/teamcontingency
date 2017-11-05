import React from "react";
import Card, { CardHeader, CardText, CardMedia } from "material-ui/Card";

const style = {
  margin: "2% 5%"
};

const titleStyle = {
  fontSize: "2em"
};

const FullPane = ({ media, text, title }) => (
  <Card style={style}>
    <CardHeader titleStyle={titleStyle} title={title} />
    <CardText>{text}</CardText>
    <CardMedia>{media}</CardMedia>
  </Card>
);

export default FullPane;
