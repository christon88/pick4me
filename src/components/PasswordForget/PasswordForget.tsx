import React, { useState } from "react";
import firebase from "../Firebase/Firebase";
import "firebase/auth";

const PasswordForget = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isInvalid = email === "";

  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmail("");
        setSubmitted(true);
      })
      .catch(error => setError(error.message));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  return (
    <div>
      <h1>Forgot password</h1>
      <form onSubmit={handlesubmit}>
        <input
          name="email"
          value={email}
          onChange={handleChange}
          type="text"
          placeholder="Email"
        />
        <br />
        <button disabled={isInvalid} type="submit">
          Submit
        </button>
      </form>
      {error && <p>{error}</p>}
      {submitted && (
        <p>A password reset link has been sent to your mail-adress</p>
      )}
    </div>
  );
};

export default PasswordForget;
