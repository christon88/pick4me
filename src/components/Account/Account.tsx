import React from "react";
import useAuth from "../Session/useAuth";

const Account = () => {
  const { user } = useAuth();
  if (user) {
    return <div>Current user: {user.displayName}</div>;
  }

  return <div>You are not signed in</div>;
};

export default Account;
