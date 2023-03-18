import { useState } from "react";
import Button from "@components/button/Button";
import Input from "@components/ui/input-field/Input";
import ShowPasswordIcon from "@components/ui/icons/ShowPasswordIcon";
import HidePasswordIcon from "@components/ui/icons/HidePasswordIcon";
import ClearInputFieldIcon from "@components/ui/icons/ClearInputFieldIcon";
import { loginBtnStyles, signInBtnStyles } from "domain/constants";
import { FormProps, UserDetails } from "domain/types";

export default function Form({ children, action, onSubmit }: FormProps) {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    userName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
    <form onSubmit={onSubmit} className="relative space-y-6">
      <div className="space-y-1 text-sm">
        <Input
          onChange={handleUserDetails}
          value={userDetails.userName}
          srOnly={false}
          type="email"
          name="userName"
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
            <ClearInputFieldIcon className="absolute top-[1.7rem] right-[2.6rem] z-50" size={25} />
          </Button>
        )}
      </div>
      <Button type="submit" className={`${signInBtnStyles} mt-4`}>
        {action === "Login" ? "Sign in" : "Sign up"}
      </Button>
      {children}
    </form>
  );
}
