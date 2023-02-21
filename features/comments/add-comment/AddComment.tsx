import useCollection from "@hooks/useCollection";
import CommentBody from "@features/comments/comment-body/CommentBody";
import Button from "@components/ui/button/Button";
import UserContainer from "@components/user-container/UserContainer";
import Modal from "@components/ui/modal/Modal";
import { CollectionObject } from "types/types";
import { commentBtnStyles } from "helpers/helpers";

type AddCommentProps = {
  onAddComment: (val: boolean) => void;
  selectedPointId: number;
};

export default function AddComment({ onAddComment, selectedPointId }: AddCommentProps) {
  const { data: comments, error } = useCollection("comments");

  // only way to find it ????
  const filteredComments = comments?.filter(({ id }) =>
    id?.substring(0, 6).includes(selectedPointId.toString())
  );

  return (
    <>
      <div className="bg-white  py-8 lg:py-16">
        <div className="max-w-2xl mx-auto lg:px-2">
          <UserContainer action="Log in to add comments">
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-dark-text-clr">
                  Discussion ({filteredComments?.length})
                </h2>
                <Button onClick={() => onAddComment(true)} className={`${commentBtnStyles}`}>
                  Add comment
                </Button>
              </div>

              {!filteredComments?.length && (
                <p className="text-center mt-4">Be the first who add a comment.</p>
              )}
            </>
          </UserContainer>

          {filteredComments?.map((comment: CollectionObject) => {
            return <CommentBody key={comment.id} details={comment} />;
          })}
        </div>
      </div>

      {error && (
        <Modal size="flex-center h-[245px]">
          <p>Could not fetch data</p>
        </Modal>
      )}
    </>
  );
}
