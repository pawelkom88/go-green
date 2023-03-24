import Button from "@components/button/Button";
import Dots from "@components/ui/icons/Dots";
import CommentAction from "@features/comments/comment-action/CommentAction";
import useToggle from "@hooks/useToggle";
import { CommentSettingsProsp } from "domain/types";

export default function CommentSettings({
  commentId,
  showCommentSettings,
  handleCommentSettings,
}: CommentSettingsProsp) {
  const { isShown: editComment, handleOnShow: setEditComment } = useToggle();

  const openCommentEditModal = editComment && (
    <CommentAction commentId={commentId} onModalClose={setEditComment} idRequired={true} />
  );

  function handleCommentRemove() {
    console.log("remove");
  }

  return (
    <>
      <Button
        onClick={() => handleCommentSettings(!showCommentSettings)}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-100 rounded-lg hover:bg-primary-clr"
        type="button">
        <Dots size={25} fill="#f1b24a" />
        <span className="sr-only">Comment settings</span>
      </Button>
      {showCommentSettings && (
        <div className="absolute top-14 -right-8 z-10 w-36 bg-slate-50 rounded divide-y shadow ">
          <ul
            className="text-sm text-dark-text-clr border border-primary-clr rounded-lg"
            aria-labelledby="dropdownMenuIconHorizontalButton">
            <li>
              <Button
                onClick={() => {
                  setEditComment(true), handleCommentSettings(false);
                }}
                className="w-full block py-2 px-4 hover:bg-primary-clr  dark:hover:text-secondary-clr cursor-pointer">
                Edit
              </Button>
            </li>
            <li>
              <Button
                onClick={handleCommentRemove}
                className="w-full first-letter:first-line:block py-2 px-4 hover:bg-primary-clr  dark:hover:text-secondary-clr cursor-pointer">
                Remove
              </Button>
            </li>
          </ul>
        </div>
      )}
      {openCommentEditModal}
    </>
  );
}
