import Button from "@components/button/Button";
import IsLoading from "@components/loading-state/IsLoading";
import Modal from "@components/modal/Modal";
import Input from "@components/ui/input-field/Input";
import usePasswordReset from "@hooks/usePasswordReset";
import { errorMsgStyles, loginInputStyles, signInBtnStyles } from "domain/constants";
import { useState } from "react";
import FormValidationMsg from "./FormValidationMsg";

export default function ForgottenPassword({
  onModalClose,
}: {
  onModalClose: (val: boolean) => void;
}) {
  const [userEmail, SetUserEmail] = useState<string>("");
  const { handlePasswordReset, loading, error } = usePasswordReset(userEmail);

  function handleUserEmail(e: Event): void {
    const { value } = e.target as HTMLInputElement;
    SetUserEmail(value);
  }

  return (
    <>
      <IsLoading isLoading={loading}>
        <Modal size="w-full h-full lg:h-1/2 flex-center flex-col gap-4" onModalClose={onModalClose}>
          <h1 className="text-2xl font-bold text-center">Reset password</h1>
          <Input
            onChange={handleUserEmail}
            value={userEmail}
            srOnly={false}
            type="email"
            name="email"
            id="email"
            placeholder="john@gmail.com"
            autoComplete="email"
            className={`${loginInputStyles} w-1/3 ${error.occured ? errorMsgStyles : ""}`}
            required={true}>
            Enter e-mail associated with your account.
          </Input>
          <FormValidationMsg message={error.message} />
          <Button onClick={handlePasswordReset} className={signInBtnStyles}>
            Submit
          </Button>
        </Modal>
      </IsLoading>
      {/* {error.message && (
        <Toast styles={toastAuthenticationStyles}>
          <p className="font-bold text-md text-center text-warning-clr">{error.message}</p>
        </Toast>
      )} */}
    </>
  );
}
