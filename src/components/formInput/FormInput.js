import React from "react";

import './formInput.scss'

export const FormInput = ({handleChange, label, ...props}) => (
   <div className={'group'}>
      <input className={'form-input'} onChange={handleChange} {...props}/>
      {label ?
         (<label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
         </label> )
         : null}
   </div>
)