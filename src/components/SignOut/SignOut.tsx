import React from "react";
import firebase from "../Firebase/Firebase";

const SignOut = () => (
  <button type="button" onClick={() => firebase.auth().signOut()}>
    <h1>SignOut</h1>
  </button>
);

export default SignOut;
