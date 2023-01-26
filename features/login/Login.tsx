import { useState } from "react";
import Link from "next/link";
import Button from "@components/ui/button/Button";
import Input from "@components/ui/input-field/Input";
import ShowPasswordIcon from "@components/ui/icons/ShowPasswordIcon";
import HidePasswordIcon from "@components/ui/icons/HidePasswordIcon";
import ClearInputFieldIcon from "@components/ui/icons/ClearInputFieldIcon";
import { signInBtnStyles, loginBtnStyles } from "@helpers/helpers";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleUsername(e: Event) {
    setUsername((e.target as HTMLInputElement).value);
  }

  function handlePassword(e: Event) {
    setPassword((e.target as HTMLInputElement).value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl  text-dark-text-clr">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      {/* extract to Form */}
      {/* extract to Form */}

      {/* <LoginForm /> */}

      {/* extract to Form */}
      {/* extract to Form */}
      <form onSubmit={handleSubmit} className="relative space-y-6">
        <div className="space-y-1 text-sm">
          <Input
            onChange={handleUsername}
            value={username}
            srOnly={false}
            type="email"
            name="username"
            id="username"
            placeholder="john@gmail.com"
            className={`${loginBtnStyles}`}
            required={true}>
            Username
          </Input>
        </div>
        <div className="relative pace-y-1 text-sm">
          <Input
            onChange={handlePassword}
            value={password}
            srOnly={false}
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="*************"
            className={`${loginBtnStyles}`}
            required={true}>
            Password
          </Input>
          <Button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <HidePasswordIcon className="absolute top-8 right-4 z-50" size={20} />
            ) : (
              <ShowPasswordIcon className="absolute top-[1.6rem] right-[.9rem] z-50" size={28} />
            )}
          </Button>
          {password.length > 0 && (
            <Button onClick={() => setPassword("")}>
              <ClearInputFieldIcon
                className="absolute top-[1.7rem] right-[2.6rem] z-50"
                size={25}
              />
            </Button>
          )}

          <div className="flex justify-end text-sm underline dark:text-gray-400 mt-2">
            <Link href="/">Forgot Password?</Link>
          </div>
        </div>
        <Button type="submit" className={`${signInBtnStyles}`}>
          Sign in
        </Button>
      </form>
      <p className="text-center text-sm sm:px-6 dark:text-gray-600">
        Don&apos;t have an account ?
        <Link href="/" className="underline dark:text-gray-600 ml-2">
          Sign up
        </Link>
      </p>
    </div>
  );
}
