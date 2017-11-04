import React, { Component } from "react";
import request from "superagent";

import AuthorizedUser from "./AuthorizedUser";

const URL =
  "https://3hkaob4gkc.execute-api.us-east-1.amazonaws.com/prod/au-hackathon/customers";

class AuthorizedUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // some user
    };
  }
  fetchUser = id => {
    return request.post(URL).send({ customer_id: id });
  };

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
      console.log(this.props.match);
      return <AuthorizedUser isPrimary={isPrimary} user={this.state} />;
    }
  }
}

export default AuthorizedUserContainer;
