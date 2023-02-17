import { useState } from "react";
import HasAccount from "@components/login/HasAccount";
import Form from "@components/form/Form";

type SignUpFormProps = {
  onLogin: () => void;
};

export default function SignUpForm({ onLogin }: SignUpFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("asdasd");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <HasAccount action="Login" onLogin={onLogin}>
        Already have an account ?
      </HasAccount>
    </Form>
  );
}
