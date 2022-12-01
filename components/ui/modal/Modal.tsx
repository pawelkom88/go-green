import React from "react";

export default function Modal({className}) {
  return (
    <dialog className={className} open>
      <p>Greetings, one and all!</p>
      <button>OK</button>
    </dialog>
  );
}
