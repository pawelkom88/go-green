import { chargingPointTabNames } from "domain/constants";

type TabsProps = {
  activeTab: string;
  onActiveTab: (val: string) => void;
};

export default function Tabs({ activeTab, onActiveTab }: TabsProps) {
  return (
    <ul className="flex-center space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap text-primary-clr mb-4 cursor-pointer text-sm md:text-lg">
      {chargingPointTabNames?.map(({ id, tabName }) => {
        return (
          <li
            tabIndex={0}
            onClick={() => onActiveTab(tabName)}
            key={id}
            className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 transition-all ease-in-out duration-500
            ${
              activeTab === tabName
                ? "border-teriary-clr text-primary-clr"
                : "dark:border-gray-700 dark:text-gray-800"
            }
            `}>
            {tabName}
          </li>
        );
      })}
    </ul>
  );
}
