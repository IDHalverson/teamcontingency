import React from "react";

const h3Style = {
  margin: "9px"
};

const InfoCard = ({ user }) => (
  <div>
    <h3 style={h3Style}>Credit Card: {user.credit_card_number}</h3>
    <h3 style={h3Style}>Date of Birth: {user.dob}</h3>
    <h3 style={h3Style}>Email: {user.email}</h3>
  </div>
);

export default InfoCard;
