import React from "react";

import './customButton.scss'

export const CustomButton = ({children, ...props}) => (
   <button className={'custom-button'} {...props}>
      {children}
   </button>
)