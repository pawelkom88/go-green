import Button from "@components/button/Button";
import ClearInputFieldIcon from "@components/ui/icons/ClearInputFieldIcon";
import HidePasswordIcon from "@components/ui/icons/HidePasswordIcon";
import ShowPasswordIcon from "@components/ui/icons/ShowPasswordIcon";
import Input from "@components/ui/input-field/Input";
import { formActions, loginBtnStyles, signInBtnStyles } from "domain/constants";
import { FormProps } from "domain/types";
import { useState } from "react";

export default function Form({
  children,
  action,
  onSubmit,
  userDetails,
  onHandleUserDetails,
}: FormProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleUserDetails(e: Event) {
    const { name, value } = e.target as HTMLInputElement;

    onHandleUserDetails({
      ...userDetails,
      [name]: value,
    });
  }

  const isPasswordVisible = showPassword ? (
    <HidePasswordIcon className="absolute top-[.4rem] right-[.2rem] z-50" size={20} />
  ) : (
    <ShowPasswordIcon size={28} />
  );
console.log(userDetails)
  return (
    <form onSubmit={onSubmit} className="relative space-y-6">
      <div className="space-y-1 text-sm">
        <Input
          onChange={handleUserDetails}
          value={userDetails.email}
          srOnly={false}
          type="email"
          name="email"
          id="userName"
          placeholder="john@gmail.com"
          className={`${loginBtnStyles}`}
          required={true}>
          E-mail
        </Input>
      </div>
      <div className="relative pace-y-1 text-sm">
        <Input
          onChange={handleUserDetails}
          value={userDetails.password}
          srOnly={false}
          type="password"
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
          <Button onClick={() => onHandleUserDetails({ ...userDetails, password: "" })}>
            <ClearInputFieldIcon className="absolute top-[1.7rem] right-[2.6rem] z-50" size={25} />
          </Button>
        )}
      </div>
      <Button type="submit" className={`${signInBtnStyles} mt-4`}>
        {action === formActions.logIn ? formActions.signIn : formActions.signUp}
      </Button>
      {children}
    </form>
  );
}
