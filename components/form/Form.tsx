import Button from "@components/button/Button";
import ForgottenPassword from "@components/form/ForgottenPassword";
import IsLoading from "@components/loading-state/IsLoading";
import ClearInputFieldIcon from "@components/ui/icons/ClearInputFieldIcon";
import Input from "@components/ui/input-field/Input";
import useAuth from "@hooks/useAuth";
import useToggle from "@hooks/useToggle";
import { errorMsgStyles, formActions, loginInputStyles, signInBtnStyles } from "domain/constants";
import { FormProps, UserDetails } from "domain/types";
import { useState } from "react";
import FormValidationMsg from "./FormValidationMsg";
import IsPasswordVisible from "./IsPasswordVisible";

export default function Form({ children, action, method, onModalClose }: FormProps) {
  const { handleUser, loading, error } = useAuth(method, action);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: "",
    password: "",
  });
  const { isShown: ForgotPasswordModal, handleOnShow: handleForgotPasswordModal } = useToggle();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (error.occured === false) onModalClose(false);

    await handleUser(userDetails.email, userDetails.password);
  }

  function handleUserDetails(e: Event): void {
    const { name, value } = e.target as HTMLInputElement;

    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  }

  const clearInputFieldBtn = userDetails.password.length > 0 && (
    <Button
      aria="Clear input field"
      onClick={() => setUserDetails({ ...userDetails, password: "" })}>
      <ClearInputFieldIcon className="absolute top-[2.1rem] right-[2.6rem] z-50" size={25} />
    </Button>
  );

  const togglePasswordVisibility = (
    <Button
      aria="Toggle password visibility"
      className="absolute top-[1.5rem] right-[.9rem] z-50"
      onClick={() => setShowPassword(!showPassword)}>
      <IsPasswordVisible showPassword={showPassword} />
    </Button>
  );

  const emailInputValidationErrorMsg =
    error.message.length > 1 && !error.message.includes("Password") && errorMsgStyles;

  const passwordInputValidationErrorMsg = error.message.includes("Password") && errorMsgStyles;

  return (
    <>
      <IsLoading isLoading={loading}>
        <FormValidationMsg message={error.message} />
        <form onSubmit={handleSubmit} className="relative space-y-6">
          <div className="space-y-1 text-sm">
            <Input
              onChange={handleUserDetails}
              value={userDetails.email.trim()}
              srOnly={false}
              type="email"
              name="email"
              id="userName"
              placeholder="john@gmail.com"
              className={`${loginInputStyles} ${emailInputValidationErrorMsg}`}
              required={true}>
              E-mail
            </Input>
          </div>
          <div className="relative space-y-2 text-sm">
            <Input
              onChange={handleUserDetails}
              value={userDetails.password.trim()}
              srOnly={false}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="*************"
              className={`${loginInputStyles} ${passwordInputValidationErrorMsg}`}
              required={true}>
              Password
            </Input>
            <Button
              onClick={() => handleForgotPasswordModal(true)}
              className="underline my-2 ml-auto">
              Forgot password ?
            </Button>
            {togglePasswordVisibility}
            {clearInputFieldBtn}
          </div>
          <Button type="submit" className={`${signInBtnStyles} mt-4`}>
            {action === formActions.signIn ? formActions.signIn : formActions.signUp}
          </Button>
          {children}
        </form>
      </IsLoading>

      {ForgotPasswordModal && (
        <ForgottenPassword onModalClose={() => handleForgotPasswordModal(false)} />
      )}
    </>
  );
}
