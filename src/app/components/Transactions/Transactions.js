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

import { CapOneRed, CapOneBlue2, CapOneGray } from "../../../colors";
import { getTransactions, prettyDate, prettyName, price } from "./util";

const headerStyle = { color: CapOneGray, fontSize: "1.25em" };

const Transactions = ({
  user,
  updatePrudency,
  transactions,
  month,
  primary,
  count
}) => {
  transactions = getTransactions({ transactions, month, primary, count });

  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow style={{ verticalAlign: "center" }}>
          {["Date", "Merchant", "Amount"].map(label => (
            <TableHeaderColumn key={label} style={headerStyle}>
              {label}
            </TableHeaderColumn>
          ))}
          {!primary && (
            <TableHeaderColumn style={headerStyle}>Prudent?</TableHeaderColumn>
          )}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {transactions.map(t => (
          <TableRow key={t.transaction_id} hoverable={true}>
            <TableRowColumn>{prettyDate(t.date)}</TableRowColumn>
            <TableRowColumn>{prettyName(t.merchant_name)}</TableRowColumn>
            <TableRowColumn>{price(t.amount)}</TableRowColumn>
            {!primary && (
              <TableRowColumn>
                <Toggle
                  toggled={t.rating}
                  trackStyle={{ backgroundColor: "#FFFFFF" }}
                  trackSwitchedStyle={{ backgroundColor: "#FFFFFF" }}
                  thumbStyle={{ backgroundColor: CapOneRed }}
                  thumbSwitchedStyle={{ backgroundColor: CapOneBlue2 }}
                  defaultToggled={true}
                  onToggle={updatePrudency(
                    t.transaction_id,
                    !t.rating,
                    user.customer_id
                  )}
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
