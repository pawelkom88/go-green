import Button from "@components/button/Button";
import Modal from "@components/modal/Modal";
import Input from "@components/ui/input-field/Input";
import SetCommentRating from "@features/comments/set-comment-rating/SetCommentRating";
import { db } from "@lib/config";
import { commentBtnStyles, disabledBtnStyles } from "domain/constants";
import { CommentActionProps, UserComment } from "domain/types";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CommentAction({
  onModalClose,
  idRequired = false,
  commentId,
  selectedPointId,
}: CommentActionProps) {
  const [numberOfStars, setNumberOfStars] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  const commentContentRef = useRef<HTMLTextAreaElement>(null);

  function handleCommentTitle(e: Event) {
    setTitle((e.target as HTMLInputElement).value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onModalClose(false);

    const userComment: UserComment = {
      userName: "logged in user name / change",
      title,
      rating: numberOfStars,
      content: commentContentRef?.current?.value,
      timestamp: serverTimestamp(),
    };

    if (idRequired) {
      await setDoc(doc(db, "comments", commentId as string), userComment);
    } else {
      await setDoc(doc(db, "comments", `${selectedPointId + uuidv4()}`), userComment);
    }

    // add toast
  }

  return (
    <Modal size="w-full min-h-[400px] flex-center" onModalClose={onModalClose}>
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
          onChange={handleCommentTitle}
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
          What&apos;s on your mind ?
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
          disabled={numberOfStars === 0}>
          Add comment
        </Button>
      </form>
      {/* <Toast></Toast> */}
    </Modal>
  );
}
