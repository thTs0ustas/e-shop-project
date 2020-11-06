import React, {useState} from "react";

import './signIn.scss'

import {FormInput} from "../formInput";
import {CustomButton} from "../customButton";


export const SignIn = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const handleSubmit = (event) => {
      event.preventDefault()
      setEmail('')
      setPassword('')
   }
   const handleChange = ({target: {name, value}})=>{
      if(name==='email')setEmail(value)
      if(name==='password')setPassword(value)
   }

   return (
      <div className={'sign-in'}>
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>

         <form onSubmit={handleSubmit}>
            <FormInput
               label={'EMAIL'}
               handleChange={handleChange}
               name={'email'}
               type={'email'}
               value={email}
               required={true}
            />
            <FormInput
               label={'PASSWORD'}
               handleChange={handleChange}
               name={'password'}
               type={'password'}
               value={password}
               required={true}
            />

            <CustomButton type={'submit'}>
               SIGN IN
            </CustomButton>
         </form>
      </div>
   )
}

