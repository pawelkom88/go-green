import { useState } from "react";
import { AddCommentForm } from "@features/comments/add-comment/AddCommentForm";
import useClickOutside from "@hooks/useClickOutside";
import CommentSettings from "@features/comments/comment-settings/CommentSettings";
import CommentBody from "@features/comments/comment-body/CommentBody";
import CommentForm from "@features/comments/comment-form/CommentForm";
import CloseBtnIcon from "@components/ui/icons/CloseBtnIcon";
import DropdownMenu from "@features/comments/comment-dropdown-menu/DropdownMenu";
import Button from "@components/ui/button/Button";
import { CommentDetails } from "types/types";

type CommentProps = {
  details: CommentDetails;
  numberOfComments: number;
};

const isLoggedIn = false;

const commentBtnStyles =
  "bg-primary-clr py-2 px-4 text-white font-bold hover:bg-secondary-clr hover:text-primary-clr text-sm";

export default function Comment({ details, numberOfComments }: CommentProps) {
  const [addComment, setAddComment] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  // close menu after clicking outside it
  let domNode = useClickOutside(() => {
    setOpenSettings(false);
  });

  return (
    <>
      <div className="bg-white  py-8 lg:py-16">
        <div className="max-w-2xl mx-auto lg:px-2">
          <div className="flex justify-between items-center mb-6">
            <Button onClick={() => setAddComment(true)} className={`${commentBtnStyles}`}>
              Add comment
            </Button>
            <h2 className="text-lg lg:text-2xl font-bold text-dark-text-clr">
              Discussion ({numberOfComments})
            </h2>
          </div>

          <CommentBody domNode={domNode} details={details}>
            <CommentSettings onOpen={openSettings} onClose={setOpenSettings}>
              {openSettings && <DropdownMenu onEdit={setEditComment} onClose={setOpenSettings} />}
            </CommentSettings>
          </CommentBody>
          {isLoggedIn && <CommentForm task="post" />}

          {editComment && (
            <div className="relative mt-16 py-8">
              <Button onClick={() => setEditComment(false)}>
                <CloseBtnIcon size={25} className="absolute top-0 right-0" />
              </Button>
              <CommentForm task="edit" />
            </div>
          )}
        </div>
      </div>
      {addComment && <AddCommentForm onAddComment={setAddComment} />}
    </>
  );
}
