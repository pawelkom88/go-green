import { useState } from "react";
import Button from "@components/ui/button/Button";
import Modal from "@components/ui/modal/Modal";
import SetCommentRating from "./set-comment-rating/SetCommentRating";

const commentBtnStyles =
  "bg-primary-clr py-2 px-4 text-white font-bold hover:bg-secondary-clr hover:text-primary-clr text-sm";

const disabledBtnStyles = "bg-gray-200 py-2 px-4 text-black font-bold text-sm";

type AddCommentFormProps = {
  onAddComment: (val: boolean) => void;
};

export function AddCommentForm({ onAddComment }: AddCommentFormProps) {
  const [numberOfStars, setNumberOfStars] = useState<number>(0);

  function handleSubmit(e: any) {
    e.preventDefault();
    onAddComment(false);

    // add toast
  }
  return (
    <Modal size="w-full min-h-[400px] flex-center" callback={() => onAddComment(false)}>
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
        <label htmlFor="comment-content" className="sr-only">
          Write your comment
        </label>
        <textarea
          className="border-2"
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
    </Modal>
  );
}
