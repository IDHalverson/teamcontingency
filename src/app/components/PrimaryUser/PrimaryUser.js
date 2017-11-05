import React from "react";
import FullPane from "../../elements/FullPane";
import HalfPane from "../../elements/HalfPane";
import Chart from "../Chart";
import sizeMe from "react-sizeme";
import RefreshIndicator from "material-ui/RefreshIndicator";
import { CapOneBlue } from "../../../colors";
import InfoCard from "../../elements/InfoCard";
import { Link } from "react-router-dom";

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

const PrimaryUser = ({ user, isPrimary, size: { width } }) => {
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
        <FullPane
          title={`${user.first_name} ${user.last_name}`}
          text={<InfoCard user={user} />}
          media={<Chart user={user} height={300} width={width * 0.9} />}
        />
        {user.account.authorized_users.map(authUser => (
          <Link to={`/${user.customer_id}/${authUser.customer_id}`}>
            <HalfPane
              key={authUser.credit_card_number}
              title={`${authUser.first_name} ${authUser.last_name}`}
              text={<InfoCard user={authUser} />}
              media={<Chart user={authUser} height={300} width={width * 0.4} />}
            />
          </Link>
        ))}
      </div>
    );
  }
};

export default sizeMe()(PrimaryUser);
