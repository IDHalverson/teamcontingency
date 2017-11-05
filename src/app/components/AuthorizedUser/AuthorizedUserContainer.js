import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import AuthorizedUser from "./AuthorizedUser";
import { fetchUser } from "../../utils/apiWrapper";

class AuthorizedUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      const { props: { match: { params: { id } } } } = this;
      const user = await fetchUser(id);
      this.setState({ user });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { props: { match: { params: { primaryId } } } } = this;
    return <AuthorizedUser isPrimary={!!primaryId} user={this.state.user} />;
  }
}

export default withRouter(AuthorizedUserContainer);
