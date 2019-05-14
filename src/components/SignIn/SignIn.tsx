import React, { useState } from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const SignIn = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="p4m-signIn">
      <h2>Log In</h2>
      <form>
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
        <button>Log In</button>
      </form>
      <a href="#">Forgot Password?</a>
      <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
