import React from "react";

import './customButton.scss'

export const CustomButton = ({children,isGoogleSignIn,inverted, ...props}) => (
   <button
      className={`${inverted? 'inverted':""} 
      ${isGoogleSignIn?'google-sign-in':''} 
      custom-button`}
      {...props}>
      {children}
   </button>
)