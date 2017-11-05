import React from "react";
import Card, { CardHeader, CardText, CardMedia } from "material-ui/Card";

const style = {
  marginBottom: "15px",
  width: "100%",
  minWidth: "400px"
};

const titleStyle = {
  fontSize: "1.5em"
};

const HalfPane = ({ media, text, title }) => (
  <Card style={style}>
    <CardHeader titleStyle={titleStyle} title={title} />
    <CardText>{text}</CardText>
    <CardMedia>{media}</CardMedia>
  </Card>
);

export default HalfPane;
