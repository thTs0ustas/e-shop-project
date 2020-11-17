import React, { useState } from "react";

import { FormInput } from "../formInput";
import { CustomButton } from "../customButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./signUp.scss";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUp = () => {
  const [signUpState, setSignUpState] = useState(initialState);
  const { displayName, email, password, confirmPassword } = signUpState;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setSignUpState(initialState);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpState((prevState) => ({ ...prevState, [name]: value }));
  };

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
