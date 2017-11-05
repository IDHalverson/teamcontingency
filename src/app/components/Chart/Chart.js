import React from "react";
import { CapOneBlue, CapOneBlue2, CapOneRed } from "../../../colors";

import {
  AreaChart,
  linearGradient,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  XAxis
} from "recharts";

const aggregateData = user => {
  const transactionsByMonth = user.transactions.reduce((acc, transaction) => {
    acc[transaction.month]
      ? acc[transaction.month]++
      : (acc[transaction.month] = 1);
    return acc;
  }, {});
  return Object.keys(transactionsByMonth).map(month => ({
    name: month,
    Transactions: transactionsByMonth[month],
    Progress: 10,
    amt: 400
  }));
};

const Chart = ({ width, height, user }) => {
  const data = aggregateData(user);

  return (
    <AreaChart
      width={width || 730}
      height={height || 250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={CapOneRed} stopOpacity={0.8} />
          <stop offset="95%" stopColor={CapOneRed} stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={CapOneBlue2} stopOpacity={0.8} />
          <stop offset="95%" stopColor={CapOneBlue2} stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip labelStyle={{ color: CapOneBlue }} />
      {!user.is_primary && (
        <Area
          type="monotone"
          dataKey="Progress"
          stroke={CapOneBlue2}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      )}
      <Area
        type="monotone"
        dataKey="Transactions"
        stroke={CapOneRed}
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};

export default Chart;
