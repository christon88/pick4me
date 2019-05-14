import React, { useState } from "react";
import "./SignIn.scss";

const SignIn = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="p4m-signIn">
      <h2>Log In</h2>
      <input
        type="text"
        placeholder="Email Adress"
        value={mail}
        onChange={event => setMail(event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button>Log In</button>
      <a href="#">Forgot Password?</a>
    </div>
  );
};

export default SignIn;
