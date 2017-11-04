import React, { Component } from "react";
import request from "superagent";

import AuthorizedUser from "./AuthorizedUser";

class AuthorizedUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_primary: false
    };
  }
  fetchUser = id => {
    return request.post(URL).send({ customer_id: id });
  };

  async componentDidMount() {
    try {
      const id = this.props.match.id;
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return <AuthorizedUser />;
  }
}

export default AuthorizedUserContainer;
