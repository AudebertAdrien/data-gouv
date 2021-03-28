import { useEffect, useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function AuthForm() {
  const [signInModal, setSignInModal] = useState(true);
  const [signUpModal, setSignUpModal] = useState(false);

  useEffect(() => {
    console.log(signInModal);
    console.log(signUpModal);
  });

  const toggleModal = (e) => {
    if (e.target.id === "signIn") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "signUp") {
      setSignInModal(true);
      setSignUpModal(false);
    }
  };

  return (
    <div>
      <div>
        <h1>Formular</h1>
        <button id="signIn" onClick={toggleModal}>
          SignIn
        </button>
        <button id="signUp" onClick={toggleModal}>
          SignUp
        </button>
      </div>
      {signInModal && <SignInForm />}
      {signUpModal && <SignUpForm />}
    </div>
  );
}

export default AuthForm;
