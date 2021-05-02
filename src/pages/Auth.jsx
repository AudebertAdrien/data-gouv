import AuthForm from "../components/Log/index";
import LinkPages from "../components/LinkPages";

function Auth() {
  return (
    <div>
      <LinkPages />
      <h1>Auth Page</h1>
      <div>
        <AuthForm />
      </div>
    </div>
  );
}

export default Auth;
