import Star from "@components/ui/icons/Star";
import EmptyStar from "@components/ui/icons/EmptyStar";

type CommentRatingPorps = {
  numberOfStars: number;
};

export default function CommentRating({ numberOfStars }: CommentRatingPorps) {
  return (
    <div className="flex">
      {[...new Array(numberOfStars)]?.map((_, index) => {
        return <Star size={25} fill="gold" key={index} />;
      })}
    </div>
   
  );
}
