import Button from "@components/button/Button";
import Modal from "@components/modal/Modal";
import UserContainer from "@components/user-container/UserContainer";
import CommentBody from "@features/comments/comment-body/CommentBody";
import useCollection from "@hooks/useCollection";
import { commentBtnStyles, userContainerActions } from "domain/constants";
import { AddCommentProps, Comment } from "domain/types";

export default function AddComment({ onAddComment, selectedPointId }: AddCommentProps) {
  const { data: comments, error } = useCollection("comments");

  const commentFetchErrorMsg = error && (
    <Modal size="flex-center h-[245px]">
      <p>Could not fetch data</p>
    </Modal>
  );

  // only way to find it ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
  const filteredComments = comments?.filter(({ id }) =>
    id?.substring(0, 6).includes(selectedPointId.toString())
  );

  console.log(comments)

  const noCommentsMsg = !filteredComments?.length && (
    <p className="text-center mt-4">Be the first who add a comment.</p>
  );

  return (
    <>
      <div className="bg-white py-8 lg:py-16">
        <div className="max-w-2xl mx-auto lg:px-2">
          <UserContainer action={userContainerActions.addComment}>
            <div className="flex justify-between items-center mb-6">
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
      </div>
      {commentFetchErrorMsg}
    </>
  );
}
