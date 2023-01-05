import React from "react";

type CommentsType = {
  details: string;
};

export default function Comments({ details }: CommentsType) {
  return <div>{details}</div>;
}
