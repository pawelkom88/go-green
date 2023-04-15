import Button from "@components/button/Button";
import ClearInputFieldIcon from "@components/ui/icons/ClearInputFieldIcon";
import HidePasswordIcon from "@components/ui/icons/HidePasswordIcon";
import ShowPasswordIcon from "@components/ui/icons/ShowPasswordIcon";
import Input from "@components/ui/input-field/Input";
import Spinner from "@components/ui/spinner/Spinner";
import useAuth from "@hooks/useAuth";
import { formActions, loginBtnStyles, signInBtnStyles } from "domain/constants";
import { FormProps, UserDetails } from "domain/types";
import { useState } from "react";

export default function Form({ children, action, method, onModalClose }: FormProps) {
  const { handleUser, loading, error } = useAuth(method, action);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: "",
    password: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleUser(userDetails.email, userDetails.password);

    if (error !== null) onModalClose();
  }

  function handleUserDetails(e: Event) {
    const { name, value } = e.target as HTMLInputElement;

    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  }

  const isPasswordVisible = showPassword ? (
    <HidePasswordIcon className="absolute top-[.4rem] right-[.2rem] z-50" size={20} />
  ) : (
    <ShowPasswordIcon size={28} />
  );

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit} className="relative space-y-6">
          {/* // add validation css */}
          <p>{error?.auth}</p>
          <div className="space-y-1 text-sm">
            <Input
              onChange={handleUserDetails}
              value={userDetails.email.trim()}
              srOnly={false}
              type="email"
              name="email"
              id="userName"
              placeholder="john@gmail.com"
              className={`${loginBtnStyles}`}
              required={true}>
              E-mail
            </Input>
            {/* // add validation css */}
            <p>{error?.email}</p>
          </div>
          <div className="relative pace-y-1 text-sm">
            <Input
              onChange={handleUserDetails}
              value={userDetails.password.trim()}
              srOnly={false}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="*************"
              className={`${loginBtnStyles}`}
              required={true}>
              Password
            </Input>
            <Button
              className="absolute top-[1.6rem] right-[.9rem] z-50"
              onClick={() => setShowPassword(!showPassword)}>
              {isPasswordVisible}
            </Button>
            {userDetails.password.length > 0 && (
              <Button onClick={() => setUserDetails({ ...userDetails, password: "" })}>
                <ClearInputFieldIcon
                  className="absolute top-[1.7rem] right-[2.6rem] z-50"
                  size={25}
                />
              </Button>
            )}
            {/* // add validation css */}
            <p>{error?.password}</p>
          </div>
          <Button type="submit" className={`${signInBtnStyles} mt-4`}>
            {action === formActions.signIn ? formActions.signIn : formActions.signUp}
          </Button>
          {children}
        </form>
      )}
    </>
  );
}
