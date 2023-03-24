import Form from "@components/form/Form";
import HasAccount from "@components/login/HasAccount";

export default function LoginForm({ onSignedUp }: { onSignedUp: () => void }) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("asd");
  }
  return (
    <Form action="Login" onSubmit={handleSubmit}>
      <HasAccount action="Sign up" onLogin={onSignedUp}>
        Don&apos;t have an account ?
      </HasAccount>
    </Form>
  );
}
