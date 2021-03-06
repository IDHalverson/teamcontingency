import React from "react";
import sizeMe from "react-sizeme";
import { Link, withRouter } from "react-router-dom";
import RefreshIndicator from "material-ui/RefreshIndicator";

import { CapOneBlue } from "../../../colors";
import Chart from "../Chart";
import Transactions from "../Transactions";
import FullPane from "../../elements/FullPane";
import InfoCard from "../../elements/InfoCard";
import Button from "../../elements/Button";

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

const AuthorizedUser = ({
  fetchUser,
  month,
  match,
  user,
  isPrimary,
  size: { width }
}) => {
  if (!user) {
    return (
      <div style={loaderDivStyle}>
        <RefreshIndicator
          month={month}
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
    let link = null;
    if (isPrimary) {
      link = `/${match.params.primaryId}`;
    } else if (user.is_primary) {
      link = `/${user.customer_id}`;
    }

    return (
      <div>
        {link && (
          <Link to={link}>
            <Button label={"Back"} />
          </Link>
        )}
        <FullPane
          title={`${user.first_name} ${user.last_name}`}
          text={<InfoCard user={user} />}
          media={
            <Chart user={user} month={month} height={300} width={width * 0.9} />
          }
        />
        <FullPane
          title="Transactions"
          media={
            <Transactions
              fetchUser={fetchUser}
              user={user}
              transactions={user.transactions}
              month={month}
              primary={user.is_primary}
            />
          }
        />
      </div>
    );
  }
};

export default sizeMe()(withRouter(AuthorizedUser));
