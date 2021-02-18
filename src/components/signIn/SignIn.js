import React from "react";
import useSignIn from "./useSignin";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./signIn.scss";

import { FormInput } from "../formInput";
import { CustomButton } from "../customButton";

export const SignIn = () => {
  const { email, password, handleChange, handleSubmit } = useSignIn();
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
