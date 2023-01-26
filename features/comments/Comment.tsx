import { useState } from "react";
import useCollection from "@hooks/useCollection";
import CommentAction from "@features/comments/comment-action/CommentAction";
import CommentBody from "@features/comments/comment-body/CommentBody";
import Button from "@components/ui/button/Button";
import Modal from "@components/ui/modal/Modal";
import { commentBtnStyles, disabledBtnStyles } from "helpers/helpers";

const isLoggedIn = false;

type CommentProps = {
  selectedPointId: number;
};

export default function Comment({ selectedPointId }: CommentProps) {
  const { data: comments, error } = useCollection("comments");
  const [addComment, setAddComment] = useState(false);

  const filteredComments = comments?.filter(({ id }) =>
    id?.substring(0, 6).includes(selectedPointId.toString())
  );

  const addBtnStyles = isLoggedIn ? commentBtnStyles : disabledBtnStyles;

  return (
    <>
      <div className="bg-white  py-8 lg:py-16">
        <div className="max-w-2xl mx-auto lg:px-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-dark-text-clr">
              Discussion ({filteredComments?.length})
            </h2>
            <Button
              onClick={() => setAddComment(true)}
              className={`${addBtnStyles}`}
              disabled={!isLoggedIn}>
              Add comment
            </Button>
          </div>
          {!filteredComments?.length && (
            <p className="text-center mt-4">Be the first who add a comment.</p>
          )}

          {filteredComments?.map(comment => (
            <CommentBody key={comment.id} details={comment} />
          ))}
        </div>
      </div>
      {addComment && (
        <CommentAction
          idRequired={false}
          selectedPointId={selectedPointId}
          callback={setAddComment}
        />
      )}
      {error && (
        <Modal size="flex-center h-[245px]">
          <p>Could not fetch data</p>
        </Modal>
      )}
    </>
  );
}
