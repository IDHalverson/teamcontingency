import React from "react";
import FullPane from "../../elements/FullPane";
import HalfPane from "../../elements/HalfPane";
import AUChart from "./AUChart";
import sizeMe from "react-sizeme";
import RefreshIndicator from "material-ui/RefreshIndicator";
import { CapOneRed } from "../../../colors";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

const loaderStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center"
};

const AuthorizedUser = ({ user, isPrimary, size: { width } }) => {
  return (
    <div>
      <div style={loaderStyle}>
        <div>
          <RefreshIndicator
            size={40}
            left={10}
            top={0}
            loadingColor={CapOneRed}
            status={!user ? "loading" : "hide"}
          />
        </div>
      </div>
      {!!user && (
        <div>
          <FullPane
            title={"User 1"}
            text={"Thanks for choosing Capital One!"}
            media={<AUChart data={data} height={300} width={width * 0.9} />}
          />
          <HalfPane
            title={"Dependent 1"}
            text={"Thanks for choosing Capital One!"}
            media={<AUChart data={data} height={300} width={width * 0.4} />}
          />
          <HalfPane
            title={"Dependent 2"}
            text={"Thanks for choosing Capital One!"}
            media={<AUChart data={data} height={300} width={width * 0.4} />}
          />
        </div>
      )}
    </div>
  );
};

export default sizeMe()(AuthorizedUser);
