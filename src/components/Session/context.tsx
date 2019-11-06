import React from "react";
import firebase from "firebase";

const userContext = React.createContext({ user: firebase.auth().currentUser });

export default userContext;
