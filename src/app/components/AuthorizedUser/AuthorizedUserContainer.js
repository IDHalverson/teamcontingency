import React, { Component } from "react";

import AuthorizedUser from "./AuthorizedUser";
import { fetchUser } from "../../utils/apiWrapper";

class AuthorizedUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // some user
    };
  }

  async componentDidMount() {
    try {
      // const user = await this.fetchUser(this.props.match.id);
      const user = {
        last_name: "Bramwich",
        gender: "Female",
        first_name: "Farah",
        customer_id: 100720000,
        dob: "3/7/1966",
        is_primary: false,
        zipcode: "40546",
        credit_card_number: "374622755572913",
        is_married: false,
        country: "United States",
        email: "fbramwich1@wikimedia.org"
      };

      this.setState(user);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (!this.state.customer_id) {
      // loader?
      return <h1> No User</h1>;
    } else {
      const isPrimary = !!this.props.match.params.primaryId;
      return <AuthorizedUser isPrimary={isPrimary} user={this.state} />;
    }
  }
}

export default AuthorizedUserContainer;
