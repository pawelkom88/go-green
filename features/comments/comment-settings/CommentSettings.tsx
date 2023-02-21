import useToggle from "@hooks/useToggle";
import Dots from "@components/ui/icons/Dots";
import Button from "@components/ui/button/Button";
import CommentAction from "@features/comments/comment-action/CommentAction";

type CommentSettingsProsp = {
  commentId: string | undefined;
  isShown: boolean;
  onClose: (val: boolean) => void;
};

export default function CommentSettings({ commentId, isShown, onClose }: CommentSettingsProsp) {
  const { isShown: editComment, handleOnShow: setEditComment } = useToggle();

  function handleRemove() {
    console.log("remove");
  }

  return (
    <>
      <Button
        onClick={() => onClose(!isShown)}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-100 rounded-lg hover:bg-primary-clr"
        type="button">
        <Dots size={25} fill="#f1b24a" />
        <span className="sr-only">Comment settings</span>
      </Button>
      {isShown && (
        <div className="absolute top-14 -right-8 z-10 w-36 bg-slate-50 rounded divide-y shadow ">
          <ul
            className="text-sm text-dark-text-clr border border-primary-clr rounded-lg"
            aria-labelledby="dropdownMenuIconHorizontalButton">
            <li
              onClick={() => {
                setEditComment(true), onClose(false);
              }}
              className="block py-2 px-4 hover:bg-primary-clr  dark:hover:text-secondary-clr cursor-pointer">
              Edit
            </li>
            <li
              onClick={handleRemove}
              className="block py-2 px-4 hover:bg-primary-clr  dark:hover:text-secondary-clr cursor-pointer">
              Remove
            </li>
          </ul>
        </div>
      )}

      {editComment && (
        <CommentAction commentId={commentId} callback={setEditComment} idRequired={true} />
      )}
    </>
  );
}
