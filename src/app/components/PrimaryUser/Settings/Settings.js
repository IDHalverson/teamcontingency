import React from "react";
import FullPane from "../../../elements/FullPane";
import SettingCard from "../../../elements/SettingCard";
import Button from "../../../elements/Button";
import { withRouter, Link } from "react-router-dom";

const Settings = ({ match, user, actions }) => {
  return (
    <div>
      <Link to={`/${match.params.primaryId}`}>
        <Button label={"Back"} />
      </Link>
      <FullPane
        title={"Settings"}
        media={
          <div>
            <SettingCard />
          </div>
        }
      />
    </div>
  );
};

export default withRouter(Settings);
