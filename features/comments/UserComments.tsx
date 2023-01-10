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
        <Modal>
          <p>asd</p>
        </Modal>
      )}
    </>
  );
}

// <div className="rating-stars">
// {[...new Array(rating)].map((_, index) => {
//   return (
//     <spam
//     key={index}
//       data-value={index + 1}
//       onMouseOver={e => setNumberOfStars(e.target.dataset.value)}

//       onClick={() => setNumberOfStars(index + 1)}>

//     {index + 1 <= numberOfStars ? <Star /> : <EmptyStar />}

//     </span>
//   );
// })}
// </div>
