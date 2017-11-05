import React from "react";

const style = {
  width: "100%",
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "center"
};

const imgStyle = {
  display: "block",
  maxWidth: "50%"
};

const CapOneLogo = () => {
  return (
    <div style={style}>
      <img
        style={imgStyle}
        src="https://d2e70e9yced57e.cloudfront.net/common/product/images/banking/capital-one-360-checking-account_11331000348b.png"
      />
    </div>
  );
};

export default CapOneLogo;
