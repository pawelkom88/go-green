import Form from "@components/form/Form";
import HasAccount from "@components/login/HasAccount";
import useAuth from "@hooks/useAuth";
import { authActions } from "@store/actions";
import { formActions } from "domain/constants";
import { UserDetails } from "domain/types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function SignUpForm({
  onLogin,
  onModalClose,
}: {
  onLogin: () => void;
  onModalClose: () => void;
}) {
  const { handleUser } = useAuth(createUserWithEmailAndPassword, authActions.login);

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
      action={formActions.signUp}
      onSubmit={handleSubmit}
      userDetails={userDetails}
      onHandleUserDetails={setUserDetails}>
      <HasAccount action="Login" onLogin={onLogin}>
        Already have an account ?
      </HasAccount>
    </Form>
  );
}
