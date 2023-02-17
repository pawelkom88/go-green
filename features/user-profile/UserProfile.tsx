import Image from "next/image";
import Button from "@components/ui/button/Button";
import Input from "@components/ui/input-field/Input";

export default function UserProfile() {
  function handleCheckbox() {
    console.log("a");
  }

// Button styles to be changed

  return (
      <div className="flex flex-col items-center pb-10">
        <Image
          width={24}
          height={24}
          src="/assets/electric-car.svg"
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          alt="user photo"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">User Name</h5>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
            Btn
          </Button>
          <Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
            Btn
          </Button>
        </div>

        {/* START */}
        <div className="w-full relative shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-gray-900 uppercase">
              <tr>
                <th className="px-6 py-3">Favourites points</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white  hover:bg-primary-clr hover:text-secondary-clr">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <Input
                      id="checkbox"
                      onChange={handleCheckbox}
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
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Details
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* END */}
      </div>
  );
}
