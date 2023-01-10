type DropdownMenuProps = {
  onEdit: (val: boolean) => void;
  onClose: (val: boolean) => void;
};

export default function DropdownMenu({ onEdit, onClose }: DropdownMenuProps) {
  // Edit and remove handlers
  return (
    <div className="absolute top-12 -right-8 z-10 w-36 bg-slate-50 rounded divide-y shadow ">
      <ul className="text-sm text-dark-text-clr" aria-labelledby="dropdownMenuIconHorizontalButton">
        <li
          onClick={() => {
            onEdit(true), () => onClose(false);
          }}
          className="block py-2 px-4 hover:bg-primary-clr  dark:hover:text-secondary-clr cursor-pointer">
          Edit
        </li>
        <li className="block py-2 px-4 hover:bg-primary-clr  dark:hover:text-secondary-clr cursor-pointer">
          Remove
        </li>
      </ul>
    </div>
  );
}
