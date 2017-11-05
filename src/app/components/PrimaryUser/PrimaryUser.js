import React from "react";
import { Link } from "react-router-dom";
import sizeMe from "react-sizeme";

import RefreshIndicator from "material-ui/RefreshIndicator";

import { CapOneBlue } from "../../../colors";
import FullPane from "../../elements/FullPane";
import HalfPane from "../../elements/HalfPane";
import InfoCard from "../../elements/InfoCard";
import Chart from "../Chart";

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

const PrimaryUser = ({ month, user, isPrimary, size: { width } }) => {
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
    const halfPaneWidth = width < 800 ? width * 0.9 : width * 0.4;
    return (
      <div>
        <Link to={`/authorized/${user.customer_id}`}>
          <FullPane
            title={`${user.first_name} ${user.last_name}`}
            text={<InfoCard user={user} />}
            media={
              <Chart
                user={user}
                month={month}
                height={300}
                width={width * 0.9}
              />
            }
          />
        </Link>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          {user.account.authorized_users.map(authUser => (
            <Link
              key={authUser.credit_card_number}
              to={`/${user.customer_id}/${authUser.customer_id}`}
            >
              <HalfPane
                title={`${authUser.first_name} ${authUser.last_name}`}
                text={<InfoCard user={authUser} />}
                media={
                  <Chart
                    user={authUser}
                    month={month}
                    height={300}
                    width={halfPaneWidth}
                  />
                }
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default sizeMe()(PrimaryUser);
