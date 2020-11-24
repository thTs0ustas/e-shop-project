import React from "react";

import { FormInput } from "../formInput";
import { CustomButton } from "../customButton";

import "./signUp.scss";

import useSignUp from "./useSignUp";

export const SignUp = () => {
  const { signUpState, handleSubmit, handleChange } = useSignUp();
  const { displayName, email, password, confirmPassword } = signUpState;

  return (
    <div className={"sign-up"}>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className={"sign-up-form"} onSubmit={handleSubmit}>
        <FormInput
          type={"text"}
          name={"displayName"}
          value={displayName}
          onChange={(event) => handleChange(event)}
          label={"Display Name"}
          required
        />
        <FormInput
          type={"email"}
          name={"email"}
          value={email}
          onChange={handleChange}
          label={"Email"}
          required
        />
        <FormInput
          type={"password"}
          name={"password"}
          value={password}
          onChange={handleChange}
          label={"Password"}
          required
        />
        <FormInput
          type={"password"}
          name={"confirmPassword"}
          value={confirmPassword}
          onChange={handleChange}
          label={"Confirm Password"}
          required
        />
        <CustomButton type={"submit"}>SIGN UP</CustomButton>
      </form>
    </div>
  );
};
