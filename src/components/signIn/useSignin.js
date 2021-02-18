import React from "react";

import { auth } from "../../firebase/firebase.utils";

export default () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
  return { email, password, handleChange, handleSubmit };
};
