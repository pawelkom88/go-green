import FolderIcon from "@components/ui/icons/FolderIcon";

export default function DragAndDrop() {
  return (
    <div className="flex-center w-full mx-auto">
      <div className="w-full h-auto my-20 border-4 border-dotted p-8">
        <div className="mt-10 mb-10 text-center">
          <h2 className="text-3xl font-semibold mb-2">Upload your files</h2>
          <p className="text-xs text-gray-500">File should be of format .jpg and .png</p>
        </div>
        <div className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
          <p className="z-10 text-sm font-light text-center text-gray-500">
            Drag &amp; Drop your files here or click
          </p>
          <FolderIcon size={50} fill="#164a41" />
        </div>
      </div>
    </div>
  );
}
