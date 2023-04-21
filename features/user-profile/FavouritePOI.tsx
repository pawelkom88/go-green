import Input from "@components/ui/input-field/Input";

export default function FavouritePOI() {
  return (
    <div className="w-full relative shadow-md sm:rounded-lg mt-8">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-gray-900 uppercase">
          <tr>
            <th className="w-full px-6 py-3">Favourites points</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white  hover:bg-primary-clr hover:text-secondary-clr">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <Input
                  id="checkbox"
                  onChange={() => console.log("asd")}
                  name="checkbox-table"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                  srOnly={true}
                  required={false}>
                  checkbox
                </Input>
              </div>
            </td>
            <th
              scope="row"
              className="text-left px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
              Point name
            </th>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Details
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
