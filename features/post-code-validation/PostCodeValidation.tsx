import Button from "@components/ui/button/Button";
import { useState } from "react";

const submitBtnStyles =
  "bg-teriary-clr py-2 px-4 text-black font-bold hover:bg-white hover:text-primary-clr";

export default function PostCodeValidation({}) {
  const [x, setX] = useState("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setX(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <form onSubmit={handleSubmit} className="flex-center">
      <input
        onChange={handleInput}
        className="border-2 md:border-4 border-teriary-clr focus:outline-none focus:border-secondary-cls rounded text-sm text-black md:pl-12 py-2 mr-2"
        type="text"
        placeholder="Postcode"
        value={x}
      />
      <Button type="submit" className={submitBtnStyles}>
        Submit
      </Button>
    </form>
  );
}
