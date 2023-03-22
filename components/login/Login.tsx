import LoginForm from "@features/login-form/LoginForm";
import SignUpForm from "@features/signup-form/SignUpForm";
import AnimatedLogo from "@components/ui/icons/AnimatedLogo";
import useToggle from "@hooks/useToggle";

export default function Login() {
  const { isShown, handleOnShow } = useToggle();

  const form = isShown ? (
    <SignUpForm onLogin={() => handleOnShow(false)} />
  ) : (
    <LoginForm onSignedUp={() => handleOnShow(true)} />
  );

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl  text-dark-text-clr -mt-24">
      <AnimatedLogo />
      <h1 className="text-2xl font-bold text-center">{isShown ? "Sign up" : "Login"}</h1>
      {form}
    </div>
  );
}
