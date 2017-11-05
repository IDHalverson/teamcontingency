import React from "react";
import FullPaneLeftHeader from "../../elements/FullPaneLeftHeader";
import HalfPane from "../../elements/HalfPane";
import PUChart from "./PUChart";
import sizeMe from "react-sizeme";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

const PrimaryUser = ({ size: { width } }) => {
  return (
    <div>
      <FullPaneLeftHeader
        title={"User 1"}
        text={"Thanks for choosing Capital One!"}
        media={<PUChart data={data} height={300} width={width * 0.9} />}
      />
      <HalfPane
        title={"Dependent 1"}
        text={"Thanks for choosing Capital One!"}
        media={<PUChart data={data} height={300} width={width * 0.4} />}
      />
      <HalfPane
        title={"Dependent 2"}
        text={"Thanks for choosing Capital One!"}
        media={<PUChart data={data} height={300} width={width * 0.4} />}
      />
    </div>
  );
};

export default sizeMe()(PrimaryUser);
