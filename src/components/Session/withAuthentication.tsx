import React, { useState, useEffect } from "react";

import AuthUserContext from "./context";
import firebase from "../Firebase/Firebase";
import "firebase/auth";

const withAuthentication = (WrappedComponent: any) => {
  const WithAuthentication = (props: any) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
      firebase.auth().onAuthStateChanged(authUser => {
        authUser ? setCurrentUser(authUser) : setCurrentUser(null);
      });
      console.log(currentUser);
    });

    return (
      <AuthUserContext.Provider value={currentUser}>
        <WrappedComponent {...props} />
      </AuthUserContext.Provider>
    );
  };

  return WithAuthentication;
};

export default withAuthentication;
