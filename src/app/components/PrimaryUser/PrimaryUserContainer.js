import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import PrimaryUser from "./PrimaryUser";
import { fetchUser } from "../../utils/apiWrapper";

class PrimaryUserContainer extends Component {
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
    return <PrimaryUser isPrimary={!!primaryId} user={this.state.user} />;
  }
}

export default withRouter(PrimaryUserContainer);
