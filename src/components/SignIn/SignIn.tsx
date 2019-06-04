import React, { useState } from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import firebase from "../Firebase/Firebase";
import "firebase/auth";
import { withRouter } from "react-router-dom";

const SignIn = withRouter(({ history }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then(() => history.push(ROUTES.HOME))
      .catch(error => setError(error.message));
  };

  return (
    <div className="p4m-signIn">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email Adress"
          value={mail}
          autoComplete="username"
          onChange={event => setMail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          autoComplete="current-password"
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">Log In</button>
        {error && <p>{error}</p>}
      </form>
      <Link to={ROUTES.PASSWORD_FORGET}>Forgot password?</Link>
      <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </p>
    </div>
  );
});

export default SignIn;
