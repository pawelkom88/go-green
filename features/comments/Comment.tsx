import useToggle from "@hooks/useToggle";
import CommentAction from "@features/comments/comment-action/CommentAction";
import AddComment from "./add-comment/AddComment";

type CommentProps = {
  selectedPointId: number;
};

export default function Comment({ selectedPointId  }: CommentProps) {
  const { isShown: addComment, handleOnShow: setAddComment } = useToggle();

  return (
    <>
      <AddComment onAddComment={setAddComment} selectedPointId={selectedPointId} />
      
      {addComment && (
        <CommentAction
          idRequired={false}
          selectedPointId={selectedPointId}
          callback={setAddComment}
        />
      )}
    </>
  );
}
