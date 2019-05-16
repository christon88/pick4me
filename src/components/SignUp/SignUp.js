import React, { useState } from "react";
import "./SignUp.scss";
import firebase from "../Firebase/Firebase";
import "firebase/auth";
import { createBrowserHistory } from "history";
import { HOME } from "../../constants/routes";

const SignUp = () => (
  <div>
    <SignUpForm />
  </div>
);

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState("");

  const history = createBrowserHistory();

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  const onSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(() => history.push(HOME))
      .catch(error => setError(error.message));
  };

  return (
    <form onSubmit={onSubmit} className="p4m-signUpForm">
      <input
        name="username"
        value={username || ""}
        onChange={event => setUsername(event.target.value)}
        type="text"
        placeholder="Full Name"
      />
      <input
        name="email"
        value={email || ""}
        onChange={event => setEmail(event.target.value)}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="passwordOne"
        value={passwordOne || ""}
        onChange={event => setPasswordOne(event.target.value)}
        type="password"
        placeholder="Password"
      />
      <input
        name="passwordTwo"
        value={passwordTwo || ""}
        onChange={event => setPasswordTwo(event.target.value)}
        type="password"
        placeholder="Confirm Password"
      />
      <button type="submit" disabled={isInvalid}>
        Sign Up
      </button>

      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;
