import React from "react";
import FullPane from "../../elements/FullPane";
import HalfPane from "../../elements/HalfPane";
import AUChart from "./AUChart";
import sizeMe from "react-sizeme";
import RefreshIndicator from "material-ui/RefreshIndicator";
import { CapOneBlue } from "../../../colors";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

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

const AuthorizedUser = ({ user, isPrimary, size: { width } }) => {
  console.log(user);

  const primaryData = [{}];

  return (
    <div>
      {!user && (
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
      )}
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
