import Form from "@components/form/Form";
import HasAccount from "@components/login/HasAccount";
import { formActions } from "domain/constants";
import { GenericFunction } from "domain/types";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm({
  onSignedUp,
  onModalClose,
}: {
  onSignedUp: () => void;
  onModalClose: GenericFunction<boolean>;
}) {
  return (
    <>
      <Form
        method={signInWithEmailAndPassword}
        action={formActions.signIn}
        onModalClose={onModalClose}>
        <HasAccount action={formActions.signUp} onLogin={onSignedUp}>
          Don&apos;t have an account ?
        </HasAccount>
      </Form>
    </>
  );
}
