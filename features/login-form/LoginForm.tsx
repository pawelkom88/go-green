import Form from "@components/form/Form";
import HasAccount from "@components/login/HasAccount";
import useAuth from "@hooks/useAuth";
import { formActions } from "domain/constants";
import { UserDetails } from "domain/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function LoginForm({
  onSignedUp,
  onModalClose,
}: {
  onSignedUp: () => void;
  onModalClose: () => void;
}) {
  const { handleUser } = useAuth(signInWithEmailAndPassword, formActions.signIn);
  // >>>>????? use form hook ? for both login and signup ?

  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: "",
    password: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleUser(userDetails.email, userDetails.password);
    onModalClose();
  }

  return (
    <Form
      action={formActions.logIn}
      userDetails={userDetails}
      onHandleUserDetails={setUserDetails}
      onSubmit={handleSubmit}>
      <HasAccount action={formActions.signUp} onLogin={onSignedUp}>
        Don&apos;t have an account ?
      </HasAccount>
    </Form>
  );
}
