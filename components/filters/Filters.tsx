import FilterCheckbox from "@components/filter-checkbox/FilterCheckbox";
import Button from "@components/ui/button/Button";
import FilterIcon from "@components/ui/icons/FilterIcon";

export default function Filters({}) {
  console.log("Filters renders");

  function someHandler() {
    console.log("handler");
  }

  // export ?
  const commonStyles =
    "w-full h-12 text-black font-bold uppercase my-4 border-2 border-primary-clr";

  return (
    <div className="absolute top-60 left-0 w-full flex-center flex-col">
      <div className="flex-center">
        <h2 className="text-2xl font-bold my-2 mr-2 uppercase">Filters</h2>
        <FilterIcon />
      </div>
      <FilterCheckbox>1</FilterCheckbox>
      <br />
      <FilterCheckbox>2</FilterCheckbox>
      <br />
      <FilterCheckbox>3</FilterCheckbox>
      <br />
      <div className="w-full flex-center px-1">
        <Button onClick={someHandler} className={`${commonStyles} bg-white hover:bg-secondary-clr`}>
          Apply
        </Button>
        <Button onClick={someHandler} className={`${commonStyles} bg-teriary-clr`}>
          Clear All
        </Button>
      </div>
    </div>
  );
}
