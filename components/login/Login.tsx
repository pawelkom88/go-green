import { useState } from "react";
import LoginForm from "@features/login-form/LoginForm";
import SignUpForm from "@features/signup-form/SignUpForm";
import Logo from "@components/ui/logo/Logo";
import AnimatedLogo from "@components/ui/icons/AnimatedLogo";

export default function Login() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl  text-dark-text-clr">
      {/* <Logo src="/assets/logo1.svg" width={180} height={180} className="flex-center" /> */}
      <AnimatedLogo />
      <h1 className="text-2xl font-bold text-center">{isSignedUp ? "Sign up" : "Login"}</h1>
      {isSignedUp ? (
        <SignUpForm onLogin={() => setIsSignedUp(false)} />
      ) : (
        <LoginForm onSignedUp={() => setIsSignedUp(true)} />
      )}
    </div>
  );
}
