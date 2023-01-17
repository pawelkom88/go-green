import { useState } from "react";
import useClickOutside from "@hooks/useClickOutside";
import Image from "next/image";
import CommentSettings from "@features/comments/comment-settings/CommentSettings";
import DropdownMenu from "@features/comments/comment-dropdown-menu/DropdownMenu";
import CommentRating from "@features/comments/comment-rating/CommentRating";
import CommentAction from "@features/comments/comment-action/CommentAction";
import { CommentDetails } from "types/types";

export default function CommentBody({ details }: CommentDetails) {
  const [openSettings, setOpenSettings] = useState(false);
  const [editComment, setEditComment] = useState(false);

  const convertedTimestamp = details?.timestamp?.toDate()?.toLocaleString();

  // close menu after clicking outside it
  let domNode = useClickOutside(() => {
    setOpenSettings(false);
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
                width={6}
                height={6}
                className="mr-2 w-6 h-6 rounded-full"
                src="/assets/charger-station.svg"
                alt="user-avatar"
              />
              <p className="mr-2 text-md underline text-dark-text-clr italic">{details.userName}</p>
              <CommentRating rating={details.rating} />
              <time
                className="text-sm text-gray-600"
                dateTime={convertedTimestamp}
                title={convertedTimestamp}>
                {convertedTimestamp}
              </time>
            </div>
            <div className="flex">
              <span className="mr-3 text-sm text-dark-text-clr font-bold">{details.title}</span>
            </div>
          </div>
          <CommentSettings openSettings={openSettings} onClose={setOpenSettings}>
            {openSettings && <DropdownMenu onEdit={setEditComment} onClose={setOpenSettings} />}
          </CommentSettings>
        </footer>
        <p className="text-gray-800">{details.content}</p>
      </article>
      {editComment && (
        <CommentAction commentId={details.id} callback={setEditComment} idRequired={true} />
      )}
    </>
  );
}
