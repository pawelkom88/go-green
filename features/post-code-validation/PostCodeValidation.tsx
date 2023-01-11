import Input from "@components/ui/input-field/Input";
import Button from "@components/ui/button/Button";
import { useState } from "react";

const submitBtnStyles =
  "bg-teriary-clr py-2 px-4 text-black font-bold hover:bg-white hover:text-primary-clr";

export default function PostCodeValidation({}) {
  const [input, setInput] = useState("");
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit");
  }

  function handleInput(e: Event) {
    setInput((e.target as HTMLInputElement).value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex-center">
      <Input
        onChange={handleInput}
        value={input}
        srOnly={true}
        id="poscode"
        name="postcode"
        type="text"
        placeholder="Postcode"
        className="border-2 md:border-4 border-teriary-clr focus:outline-none focus:border-secondary-cls rounded text-sm text-black md:pl-12 py-2 mr-2">
        Postcode
      </Input>
      <Button type="submit" className={submitBtnStyles}>
        Submit
      </Button>
    </form>
  );
}
