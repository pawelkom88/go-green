import { useState, useRef } from "react";
import Button from "@components/ui/button/Button";
import Modal from "@components/ui/modal/Modal";
import SetCommentRating from "@features/comments/set-comment-rating/SetCommentRating";
import Input from "@components/ui/input-field/Input";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "@lib/config";
import { v4 as uuidv4 } from "uuid";
import { CommentActionProps } from "types/types";
import { commentBtnStyles, disabledBtnStyles } from "@helpers/helpers";

export default function CommentAction({
  callback,
  idRequired = false,
  commentId,
  selectedPointId,
}: CommentActionProps) {
  const [numberOfStars, setNumberOfStars] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  const commentContentRef = useRef<HTMLTextAreaElement>(null);

  function handleTitle(e: Event) {
    setTitle((e.target as HTMLInputElement).value);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    const commentData = {
      userName: "logged in user",
      title,
      rating: numberOfStars,
      content: commentContentRef?.current?.value,
      timestamp: serverTimestamp(),
    };

    if (idRequired) {
      await setDoc(doc(db, "comments", commentId as string), commentData);
    } else {
      await setDoc(doc(db, "comments", `${selectedPointId + uuidv4()}`), commentData);
    }

    callback(false);
    // add toast
  }

  return (
    <Modal size="w-full min-h-[400px] flex-center" callback={() => callback(false)}>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <span>How do you rate this point ?</span>
        <div className="flex my-4">
          {[...new Array(5)]?.map((_, index) => {
            return (
              <SetCommentRating
                key={index}
                index={index}
                numberOfStars={numberOfStars}
                onSet={setNumberOfStars}
              />
            );
          })}
        </div>
        <Input
          onChange={handleTitle}
          value={title}
          srOnly={true}
          id="title"
          name="title"
          type="text"
          placeholder="Comment title"
          className="border-2 border-primary-clr opacity-50 my-2 p-2"
          required={true}>
          Title
        </Input>
        <label htmlFor="comment-content" className="sr-only">
          Write your comment
        </label>
        <textarea
          ref={commentContentRef}
          className="border-2 border-primary-clr opacity-50"
          name="comment-content"
          id="comment-content"
          cols={30}
          rows={10}></textarea>
        <Button
          type="submit"
          className={`${numberOfStars !== 0 ? commentBtnStyles : disabledBtnStyles} mt-4`}
          disabled={numberOfStars === 0 ? true : false}>
          Add comment
        </Button>
      </form>
      {/* <Toast></Toast> */}
    </Modal>
  );
}
