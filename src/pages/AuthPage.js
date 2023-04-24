import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

function AuthPage({ setUser }) {
  return (
    <div>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser} />
      <SignInForm />
    </div>
  );
}

export default AuthPage;
