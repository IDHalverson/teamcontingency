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
    const { props: { match: { params: { id } } } } = this;
    await this.setState({
      id
    });
    await this.fetchTheUser();
  }

  fetchTheUser = async () => {
    try {
      const user = await fetchUser(this.state.id);
      this.setState({ user });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { props: { month, match: { params: { primaryId } } } } = this;
    return (
      <AuthorizedUser
        fetchUser={this.fetchTheUser}
        month={month}
        isPrimary={!!primaryId}
        user={this.state.user}
      />
    );
  }
}

export default withRouter(AuthorizedUserContainer);
