import SignUpForm from "../components/SignUpForm";

function AuthPage({ setUser }) {
  return (
    <div>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser} />
    </div>
  );
}

export default AuthPage;
