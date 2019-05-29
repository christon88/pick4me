import React, { useState } from "react";
import "./SignUp.scss";
import firebase from "../Firebase/Firebase";
import "firebase/auth";
import { HOME } from "../../constants/routes";
import { withRouter } from "react-router-dom";

const SignUp = withRouter(({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    setError(null);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, passwordOne)
      .catch(error => setError(error.message));
    console.log("donedone");
    history.push(HOME);
    // return <Redirect to={HOME} push={true} />;
  };

  return (
    <form onSubmit={handleSubmit} className="p4m-signUpForm">
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
});

export default SignUp;
