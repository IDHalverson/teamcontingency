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

import { monthMap } from "../../utils/months";

const maxLimit = 5000;
const limitStart = 300;

const aggregateData = (user, month) => {
  const spendingByMonth = user.transactions.reduce((acc, transaction) => {
    if (monthMap[transaction.month] <= month) {
      acc[transaction.month] !== undefined
        ? (acc[transaction.month] += transaction.amount)
        : (acc[transaction.month] = 0);
    }
    return acc;
  }, {});

  let goodDecisionIndex;

  const prudenceHistory = user.transactions.reduce((acc, transaction) => {
    if (monthMap[transaction.month] <= month) {
      acc.push(transaction.rating);
    }
    return acc;
  }, []);

  let index = prudenceHistory.length - 1;
  while (index) {
    if (prudenceHistory[index]) {
      goodDecisionIndex++;
    } else {
      goodDecisionIndex = 0;
    }
    index--;
  }

  return Object.keys(spendingByMonth)
    .map(month => ({
      name: month,
      Spending: +spendingByMonth[month].toFixed(2),
      Limit: limitStart + goodDecisionIndex * 0.2 * (maxLimit - limitStart),
      amt: 400
    }))
    .sort((a, b) => monthMap[a.name] - monthMap[b.name]);
};

const Chart = ({ width, height, user, month }) => {
  const data = aggregateData(user, month);

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
          dataKey="Limit"
          stroke={CapOneBlue2}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      )}
      <Area
        type="monotone"
        dataKey="Spending"
        stroke={CapOneRed}
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};

export default Chart;
