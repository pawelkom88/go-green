import Image from "next/image";

export default function CommentRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...new Array(rating)]?.map((_, index) => {
        return <Image key={index} width={15} height={15} src="/assets/star.svg" alt="star icon" />;
      })}
    </div>
  );
}
