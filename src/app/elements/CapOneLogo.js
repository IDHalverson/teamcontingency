import React from "react";
import Button from "./Button";

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

const buttonProps = {
  backgroundColor: "#fff",
  style: { margin: "5px", visible: "hidden" }
};

const CapOneLogo = ({ next, prev }) => {
  return (
    <div>
      <div style={style}>
        <img
          alt=""
          style={imgStyle}
          src="https://d2e70e9yced57e.cloudfront.net/common/product/images/banking/capital-one-360-checking-account_11331000348b.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50px",
          right: "50px"
        }}
      >
        <Button label={"<"} onClick={prev} props={buttonProps} />
        <Button label={">"} onClick={next} props={buttonProps} />
      </div>
    </div>
  );
};

export default CapOneLogo;
