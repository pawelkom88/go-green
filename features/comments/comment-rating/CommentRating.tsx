import Star from "@components/ui/icons/Star";
import EmptyStar from "@components/ui/icons/EmptyStar";

type CommentRatingPorps = {
  numberOfStars: number;
};

export default function CommentRating({ numberOfStars }: CommentRatingPorps) {
  return (
    <div className="flex">
      {[...new Array(numberOfStars)]?.map((_, index) => {
        return <Star key={index} />;
      })}
    </div>
    // <div className="flex">
    //   {[...new Array(5)]?.map((_, index) => {
    //     return (
    //       <span
    //         key={index}
    //         data-value={index + 1}
    //         onMouseOver={e => setNumberOfStars(e.target.dataset.value)}
    //         onClick={() => setNumberOfStars(index + 1)}>
    //         {index + 1 <= numberOfStars ? <Star /> : <EmptyStar />}
    //       </span>
    //     );
    //   })}
    // </div>
  );
}
