import React from "react";
import useAuth from "../Session/useAuth";

const Account = () => {
  const { user } = useAuth();

  return <div>Current user: {user.displayName}</div>;
};

export default Account;
