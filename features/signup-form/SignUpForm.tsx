import Form from "@components/form/Form";
import HasAccount from "@components/login/HasAccount";
import { formActions } from "domain/constants";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpForm({
  onLogin,
  onModalClose,
}: {
  onLogin: () => void;
  onModalClose: () => void;
}) {
  return (
    <>
      <Form
        method={createUserWithEmailAndPassword}
        action={formActions.signUp}
        onModalClose={onModalClose}>
        <HasAccount action="Login" onLogin={onLogin}>
          Already have an account ?
        </HasAccount>
      </Form>
      {/* <ErrorMessage error={error} /> */}
    </>
  );
}
