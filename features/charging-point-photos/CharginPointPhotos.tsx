import Input from "components/ui/input-field/Input";

// type CommentsType = {
//   details: string;
// };

export default function CharginPointPhotos() {
  function handleUpload() {
    console.log("input");
  }
  // message if it was successfully uploaded or not
  return (
    <div className="w-full flex-center flex-col">
      <Input
        onChange={handleUpload}
        id="file input"
        name="file input"
        className="block mx-auto w-1/2 text-sm text-gray-900 cursor-pointer bg-gray-50 dark:placeholder-gray-400"
        labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        srOnly={false}
        type="file"
        required={false}>
        Upload file
      </Input>
      <div className="mt-8">Uploaded Photos</div>
    </div>
  );
}
