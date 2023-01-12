import Dots from "@components/ui/icons/Dots";
import Button from "@components/ui/button/Button";
import { ChildrenType } from "types/types";

interface CommentSettingsProsp extends ChildrenType {
  onOpen: boolean;
  onClose: (val: boolean) => void;
}

export default function CommentSettings({ children, onOpen, onClose }: CommentSettingsProsp) {
  return (
    <>
      <Button
        onClick={() => onClose(!onOpen)}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-100 rounded-lg hover:bg-primary-clr"
        type="button">
        <Dots size={25} fill="#f1b24a" />
        <span className="sr-only">Comment settings</span>
      </Button>
      {children}
    </>
  );
}
