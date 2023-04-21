import Form from "@components/form/Form";
import AnimatedLogo from "@components/ui/icons/AnimatedLogo";
import useToggle from "@hooks/useToggle";
import { formActions } from "domain/constants";
import { GenericFunction } from "domain/types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import HasAccount from "../HasAccount";

export default function UserCredentials({
  onHandleShowUserCredentialModal,
}: {
  onHandleShowUserCredentialModal: GenericFunction;
}) {
  const { isShown: isRegistered, handleOnShow: handleIsRegistered } = useToggle();

  const registrationForm: JSX.Element = isRegistered ? (
    <Form
      method={createUserWithEmailAndPassword}
      action={formActions.signUp}
      onModalClose={onHandleShowUserCredentialModal}>
      <HasAccount action={formActions.logIn} onLogin={() => handleIsRegistered(false)}>
        <span className="block"> Already have an account ?</span>
      </HasAccount>
    </Form>
  ) : (
    <Form
      method={signInWithEmailAndPassword}
      action={formActions.signIn}
      onModalClose={onHandleShowUserCredentialModal}>
      <HasAccount action={formActions.signUp} onLogin={() => handleIsRegistered(true)}>
        <span className="block">Don&apos;t have an account ?</span>
      </HasAccount>
    </Form>
  );

  return (
    <>
      <div className="w-full max-w-sm p-8 space-y-3 rounded-xl  text-dark-text-clr -mt-24">
        <AnimatedLogo />
        <h1 className="text-2xl font-bold text-center">
          {isRegistered ? formActions.signUp : formActions.logIn}
        </h1>
        {registrationForm}
      </div>
    </>
  );
}
