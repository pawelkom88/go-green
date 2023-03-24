import Form from "@components/form/Form";
import HasAccount from "@components/login/HasAccount";

export default function SignUpForm({ onLogin }: { onLogin: () => void }) {
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
