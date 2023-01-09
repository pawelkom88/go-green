import React from "react";

type CommentsType = {
  details: string;
};

export default function Photos({ details }: CommentsType) {
  return <div>{details}</div>;
}
