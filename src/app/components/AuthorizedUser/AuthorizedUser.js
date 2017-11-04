import React from "react";

const AuthorizedUser = ({ isPrimary }) => {
  if (isPrimary) {
    return <h6>Primary AuthorizedUser</h6>;
  }
  return <h6>AuthorizedUser</h6>;
};

export default AuthorizedUser;
