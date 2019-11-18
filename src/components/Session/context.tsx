import React from "react";
import firebase from "../Firebase/Firebase";

const userContext = React.createContext({ user: firebase.auth().currentUser });

export default userContext;
