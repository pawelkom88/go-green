import useToggle from "@hooks/useToggle";
import CommentAction from "@features/comments/comment-action/CommentAction";
import AddComment from "./add-comment/AddComment";

export default function Comment({ selectedPointId }: { selectedPointId: number }) {
  const { isShown: addComment, handleOnShow: setAddComment } = useToggle();

  const openAddCommentModal = addComment && (
    <CommentAction idRequired={false} selectedPointId={selectedPointId} onModalClose={setAddComment} />
  );

  return (
    <>
      <AddComment onAddComment={setAddComment} selectedPointId={selectedPointId} />
      {openAddCommentModal}
    </>
  );
}
