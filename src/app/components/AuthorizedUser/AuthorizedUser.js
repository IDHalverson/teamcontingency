import React from "react";
import FullPane from "../../elements/FullPane";
import HalfPane from "../../elements/HalfPane";
import Chart from "../Chart";
import sizeMe from "react-sizeme";
import RefreshIndicator from "material-ui/RefreshIndicator";
import { CapOneBlue } from "../../../colors";
import InfoCard from "../../elements/InfoCard";
import Button from "../../elements/Button";
import { Link, withRouter } from "react-router-dom";

const loaderDivStyle = {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center"
};

const loaderStyle = {
  position: "relative",
  marginTop: "100px",
  backgroundColor: "rgba(255,255,255,0)"
};

const AuthorizedUser = ({ match, user, isPrimary, size: { width } }) => {
  if (!user) {
    return (
      <div style={loaderDivStyle}>
        <RefreshIndicator
          style={loaderStyle}
          size={40}
          left={10}
          top={0}
          loadingColor={CapOneBlue}
          status={"loading"}
        />
      </div>
    );
  } else {
    return (
      <div>
        {isPrimary && (
          <Link to={`/${match.params.primaryId}`}>
            <Button label={"Back"} />
          </Link>
        )}
        <FullPane
          title={`${user.first_name} ${user.last_name}`}
          text={<InfoCard user={user} />}
          media={<Chart user={user} height={300} width={width * 0.9} />}
        />
      </div>
    );
  }
};

export default sizeMe()(withRouter(AuthorizedUser));
