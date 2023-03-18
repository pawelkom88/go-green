import useToggle from "@hooks/useToggle";
import useClickOutside from "@hooks/useClickOutside";
import Image from "next/image";
import CommentSettings from "@features/comments/comment-settings/CommentSettings";
import CommentRating from "@features/comments/comment-rating/CommentRating";
import { Comment } from "domain/types";

export default function CommentBody({ details }: { details: Comment }) {
  const { userName, rating, id, title, content, timestamp } = details ?? [];

  const convertedTimestamp: string = timestamp?.toDate().toLocaleString();

  const { isShown: showCommentSettings, handleOnShow: handleCommentSettings } = useToggle();

  // close menu after clicking outside it
  let domNode = useClickOutside(() => {
    handleCommentSettings(false);
  });

  return (
    <>
      <article
        ref={domNode}
        className="border border-teriary-clr p-6 text-base bg-white rounded-lg mt-8">
        <footer className="relative flex justify-between items-center mb-2">
          <div className="w-3/5 flex flex-col">
            <div className="flex items-center justify-between flex-wrap mb-2">
              <Image
                placeholder="blur"
                blurDataURL="/assets/charger-station-low.svg"
                width={6}
                height={6}
                className="mr-2 w-6 h-6 rounded-full"
                src="/assets/charger-station.svg"
                alt="user-avatar"
              />
              <p className="mr-2 text-md underline text-dark-text-clr italic">{userName}</p>
              <CommentRating rating={rating} />
              <time
                className="text-sm text-gray-600"
                dateTime={convertedTimestamp}
                title={convertedTimestamp}>
                {convertedTimestamp}
              </time>
            </div>
            <div className="flex">
              <span className="mr-3 text-sm text-dark-text-clr font-bold">{title}</span>
            </div>
          </div>
          <CommentSettings
            commentId={id}
            showCommentSettings={showCommentSettings}
            handleCommentSettings={handleCommentSettings}
          />
        </footer>
        <p className="text-gray-800">{content}</p>
      </article>
    </>
  );
}
