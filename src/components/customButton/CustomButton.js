import React from "react";

import './customButton.scss'

export const CustomButton = ({children,isGoogleSignIn, ...props}) => (
   <button
      className={`${isGoogleSignIn?'google-sign-in':''} custom-button`}
      {...props}>
      {children}
   </button>
)