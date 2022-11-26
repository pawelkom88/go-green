type SideBarItemProps = {
  name: string;
};

export default function SidebarItem({ name }: SideBarItemProps) {
  return (
    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
      {name}
    </li>
  );
}
