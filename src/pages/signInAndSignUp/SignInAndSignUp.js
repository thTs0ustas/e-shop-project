import React from "react";
import {SignIn,SignUp} from "../../components";

import './signInAndSignUp.scss'

export const SignInAndSignUp = () => (
   <div className={'sign-in-and-sign-up'}>
      <SignIn/>
      <SignUp/>
   </div>
)