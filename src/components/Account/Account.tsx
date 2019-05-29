import React from "react";
import { AuthUserContext } from "../Session";

const Account = () => (
  <AuthUserContext.Consumer>
    {currentUser =>
      currentUser && <p>Current user: {currentUser.displayName}</p>
    }
  </AuthUserContext.Consumer>
);

export default Account;
