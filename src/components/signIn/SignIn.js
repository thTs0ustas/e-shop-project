import React, { useState } from "react";

import "./signIn.scss";

import { FormInput } from "../formInput";
import { CustomButton } from "../customButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = ({ target: { name, value } }) => {
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  return (
    <div className={"sign-in"}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label={"EMAIL"}
          handleChange={handleChange}
          name={"email"}
          type={"email"}
          value={email}
          required={true}
        />
        <FormInput
          label={"PASSWORD"}
          handleChange={handleChange}
          name={"password"}
          type={"password"}
          value={password}
          required={true}
        />
        <div className={"button"}>
          <CustomButton type={"submit"}>Sign in</CustomButton>
          <CustomButton
            type={"submit"}
            onClick={signInWithGoogle}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
