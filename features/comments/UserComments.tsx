import Comment from "@features/comments/Comment";
import Modal from "@components/ui/modal/Modal";
import useCollection from "@hooks/useCollection";

export default function UserComments() {
  // Get collection data
  const { data: comments, error } = useCollection("comments");

  return (
    <>
      <section>
        {comments?.map(comment => {
          return <Comment key={comment.id} details={comment} numberOfComments={comments.length} />;
        })}
      </section>
      {error && (
        <Modal size='flex-center h-[245px]'>
          <p>Could not fetch data</p>
        </Modal>
      )}
    </>
  );
}
