import { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const useSignUp = () => {
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

  return { signUpState, handleSubmit, handleChange };
};

export default useSignUp;
