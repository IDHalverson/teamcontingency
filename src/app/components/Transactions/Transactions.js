import React from "react";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Toggle from "material-ui/Toggle";

import { CapOneRed, CapOneBlue2 } from "../../../colors";
import { monthMap } from "../../utils/months";

const monthNum = transaction => monthMap[transaction.month];
const transactionDate = t => new Date(t.year, monthNum(t) - 1, t.day).getTime();
const price = p => `$${p.toFixed(2)}`;
const prettyDate = d => new Date(d).toLocaleDateString();
const prettyName = name =>
  name
    .split(" ")
    .map(w => (w[0] || "").toUpperCase() + w.slice(1))
    .join(" ");

const Transactions = ({ transactions, month, primary, count = 30 }) => {
  transactions = transactions
    .filter(transaction => monthNum(transaction) <= month)
    .map(t => ({ ...t, date: transactionDate(t) }))
    .sort((a, b) => b.date - a.date)
    .filter((transaction, index) => index < count);

  const hStyle = { color: CapOneRed, fontSize: "1.25em" };

  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow style={{ verticalAlign: "center" }}>
          <TableHeaderColumn style={hStyle}>Date</TableHeaderColumn>
          <TableHeaderColumn style={hStyle}>Merchant</TableHeaderColumn>
          <TableHeaderColumn style={hStyle}>Amount</TableHeaderColumn>
          {!primary && (
            <TableHeaderColumn style={hStyle}>Acceptable?</TableHeaderColumn>
          )}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {transactions.map(t => (
          <TableRow key={t.transaction_id}>
            <TableRowColumn>{prettyDate(t.date)}</TableRowColumn>
            <TableRowColumn>{prettyName(t.merchant_name)}</TableRowColumn>
            <TableRowColumn>{price(t.amount)}</TableRowColumn>
            {!primary && (
              <TableRowColumn>
                <Toggle
                  trackSwitchedStyle={{ backgroundColor: CapOneRed }}
                  thumbSwitchedStyle={{ backgroundColor: CapOneBlue2 }}
                  thumbStyle={{ backgroundColor: CapOneBlue2 }}
                  defaultToggled={true}
                />
              </TableRowColumn>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Transactions;
