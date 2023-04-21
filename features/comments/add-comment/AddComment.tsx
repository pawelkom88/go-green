import Button from "@components/button/Button";
import Modal from "@components/modal/Modal";
import UserContainer from "@components/user-container/UserContainer";
import CommentBody from "@features/comments/comment-body/CommentBody";
import useCollection from "@hooks/useCollection";
import { commentBtnStyles, photoUploadActions } from "domain/constants";
import { AddCommentProps, Comment } from "domain/types";

export default function AddComment({ onAddComment, selectedPointId }: AddCommentProps) {
  const { data: comments, error } = useCollection("comments");

  const commentFetchErrorMsg: JSX.Element | null = error ? (
    <Modal size="flex-center h-[245px]">
      <p>Could not fetch data</p>
    </Modal>
  ) : null;

  // only way to find it ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
  const filteredComments = comments?.filter(({ id }) =>
    id?.substring(0, 6).includes(selectedPointId.toString())
  );

  const noCommentsMsg: false | JSX.Element = !filteredComments?.length && (
    <p className="text-center mt-4">Be the first who add a comment.</p>
  );

  const isNotLoggedInMessage: JSX.Element = (
    <h2 className="text-md lg:text-xl font-bold text-dark-text-clr text-center mt-12">
      {photoUploadActions.addComment}
    </h2>
  );

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <UserContainer fallback={isNotLoggedInMessage}>
          <div className="flex justify-between items-center mb-6 px-2 py-8">
            <h2 className="text-lg lg:text-2xl font-bold text-dark-text-clr">
              Discussion ({filteredComments?.length})
            </h2>
            <Button onClick={() => onAddComment(true)} className={`${commentBtnStyles}`}>
              Add comment
            </Button>
          </div>
          {noCommentsMsg}
        </UserContainer>
        {filteredComments?.map((comment: Comment) => {
          return <CommentBody key={comment.id} details={comment} />;
        })}
      </div>
      {commentFetchErrorMsg}
    </>
  );
}
