import AnimatedLogo from "@components/ui/icons/AnimatedLogo";
import LoginForm from "@features/login-form/LoginForm";
import SignUpForm from "@features/signup-form/SignUpForm";
import useToggle from "@hooks/useToggle";
import { formActions } from "domain/constants";
import { GenericFunction } from "domain/types";

export default function UserCredentialModal({
  onHandleShowUserCredentialModal,
}: {
  onHandleShowUserCredentialModal: GenericFunction<boolean>;
}) {
  const { isShown: isRegistered, handleOnShow: handleIsRegistered } = useToggle();

  const registrationForm = isRegistered ? (
    <SignUpForm
      onModalClose={onHandleShowUserCredentialModal}
      onLogin={() => handleIsRegistered(false)}
    />
  ) : (
    <LoginForm
      onModalClose={onHandleShowUserCredentialModal}
      onSignedUp={() => handleIsRegistered(true)}
    />
  );

  return (
    <div className="w-full max-w-sm p-8 space-y-3 rounded-xl  text-dark-text-clr -mt-24">
      <AnimatedLogo />
      <h1 className="text-2xl font-bold text-center">
        {isRegistered ? formActions.signUp : formActions.logIn}
      </h1>
      {registrationForm}
    </div>
  );
}
