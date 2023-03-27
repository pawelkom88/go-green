import Button from "@components/button/Button";
import Modal from "@components/modal/Modal";
import AnimatedLogo from "@components/ui/icons/AnimatedLogo";
import LoginForm from "@features/login-form/LoginForm";
import SignUpForm from "@features/signup-form/SignUpForm";
import useToggle from "@hooks/useToggle";
import { formActions, signInBtnStyles } from "domain/constants";

export default function LoginModal() {
  const { isShown, handleOnShow } = useToggle();

  const { isShown: isRegistered, handleOnShow: handleIsRegistered } = useToggle();

  const registrationForm = isRegistered ? (
    <SignUpForm
      onModalClose={() => handleOnShow(false)}
      onLogin={() => handleIsRegistered(false)}
    />
  ) : (
    <LoginForm
      onModalClose={() => handleOnShow(false)}
      onSignedUp={() => handleIsRegistered(true)}
    />
  );

  const showLoginModal = isShown && (
    <Modal size="w-full h-2/3 flex-center" onModalClose={() => handleOnShow(false)}>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  text-dark-text-clr -mt-24">
        <AnimatedLogo />
        <h1 className="text-2xl font-bold text-center">
          {isRegistered ? formActions.signUp : formActions.logIn}
        </h1>
        {registrationForm}
      </div>
    </Modal>
  );

  return (
    <>
      <Button
        onClick={() => handleOnShow(true)}
        className={`${signInBtnStyles} hover:bg-white hover:text-primary-clr mr-4 ml-auto hidden lg:block`}>
        LOG IN
      </Button>
      {showLoginModal}
    </>
  );
}
