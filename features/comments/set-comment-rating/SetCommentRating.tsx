import Button from "@components/button/Button";
import Image from "next/image";

type SetCommentRatingProps = {
  numberOfStars: number;
  index: number;
  onSet: (val: number) => void;
};

export default function SetCommentRating({ numberOfStars, onSet, index }: SetCommentRatingProps) {
  function handleRating(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;
    onSet(Number(target.dataset.value));
  }
  return (
    <Button>
      <Image
        width={25}
        height={25}
        src={index < (numberOfStars as number) ? "/assets/star.svg" : "/assets/empty-star.svg"}
        className="cursor-pointer"
        key={index}
        data-value={index + 1}
        onMouseOver={handleRating}
        alt="star"
      />
    </Button>
  );
}
