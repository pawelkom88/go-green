import UserIcon from "@components/ui/icons/UserIcon";

type UserNameProps = {
  name: string;
  src: string;
  onToggle?: () => void;
};

export default function Avatar({ name, src, onToggle }: UserNameProps) {
  return (
    <div onClick={onToggle} className="flex-center py-[2px]">
      {/* CHANGE to uploaded photo - remember of type */}
      {
        <UserIcon size={35} fill="#f1b24a" />
        // <UserIcon size={35} fill='#f1b24a'/>
      }
      <p className="text-text-clr text-base leading-4 ml-2">{name}</p>
    </div>
  );
}
