import { useState } from "react";
import DragAndDrop from "@components/ui/drag&drop/DragAndDrop";
import { FileUploader } from "react-drag-drop-files";
import Modal from "@components/ui/modal/Modal";
import { uploadType } from "types/types";

const fileTypes = ["JPG", "PNG"];

export default function ChargingPointPhotos() {
  const [file, setFile] = useState<null | uploadType>(null);
  const [sizeError, setSizeError] = useState(false);

  function handleUpload(file: uploadType) {
    setFile(file);
  }
  // message if it was successfully uploaded or not

  return (
    <>
      <div className="w-full flex-center flex-col">
        <FileUploader
          handleChange={handleUpload}
          onSizeError={() => setSizeError(true)}
          name="file"
          types={fileTypes}
          maxSize={1}>
          <DragAndDrop />
        </FileUploader>
        <div className="mt-8">{file && file?.name}</div>
      </div>

      {sizeError && (
        <Modal size="flex-center h-[300]" callback={() => setSizeError(false)}>
          The file you are trying to upload is too large.
        </Modal>
      )}
    </>
  );
}
