import React, { Component } from "react";
import Transactions from "./Transactions";
import { updatePrudency } from "../../utils/apiWrapper";

class TransactionsContainer extends Component {
  constructor(props) {
    super(props);
  }

  updatePrudency = (id, rating, userId) => async () => {
    await updatePrudency(id, rating, userId);
    await this.props.fetchUser();
  };

  render() {
    const { user, transactions, month, primary, count = 30 } = this.props;
    const TransactionsProps = {
      transactions,
      month,
      primary,
      count,
      user,
      updatePrudency: this.updatePrudency
    };

    return <Transactions {...TransactionsProps} />;
  }
}

export default TransactionsContainer;
