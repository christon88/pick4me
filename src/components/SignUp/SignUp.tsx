import React from "react";

const SignUp = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const SignUpForm = () => {
  const onSubmit = event => {};

  const onChange = event => {};

  return <form onSubmit={onSubmit} />;
};

export default SignUp;
