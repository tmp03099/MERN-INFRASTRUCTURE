import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className="AuthPage">
      <h1>Auth Page</h1>
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign Up" : "Sign In"}
      </button>
      {showLogin ? (
        <SignInForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
