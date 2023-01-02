import Button from "@components/ui/button/Button";
import { useState } from "react";

const submitBtnStyles =
  "w-full bg-secondary-clr text-primary-clr font-bold text-sm px-2 py-2";

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
        className="border-2 md:border-4 border-teriary-clr focus:outline-none focus:border-secondary-cls rounded text-sm text-black pl-4 md:pl-12 md:py-2 mr-2"
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
