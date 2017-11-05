import React from "react";

const InfoCard = ({ user }) => (
  <div>
    <h3>Credit Card: {user.credit_card_number}</h3>
    <h3>Date of Birth: {user.dob}</h3>
    <h3>Email: {user.email}</h3>
  </div>
);

export default InfoCard;
