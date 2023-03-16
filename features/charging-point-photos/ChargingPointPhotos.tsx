import { useState } from "react";
import useToggle from "@hooks/useToggle";
import DragAndDrop from "@components/ui/drag&drop/DragAndDrop";
import Modal from "@components/ui/modal/Modal";
import UserContainer from "@components/user-container/UserContainer";
import { FileUploader } from "react-drag-drop-files";
import { uploadType } from "domain/types";

const fileTypes = ["JPG", "PNG"];

export default function ChargingPointPhotos() {
  const [file, setFile] = useState<uploadType>();
  const { isShown: sizeError, handleOnShow: setSizeError } = useToggle();

  function handleUpload(file: uploadType) {
    setFile(file);
  }
  // message if it was successfully uploaded or not

  return (
    <>
      <div className="w-full flex-center flex-col">
        <UserContainer action="Log in to upload images">
          <FileUploader
            handleChange={handleUpload}
            onSizeError={() => setSizeError(true)}
            name="file"
            types={fileTypes}
            maxSize={1}>
            <DragAndDrop />
          </FileUploader>
          <div className="mt-8">{file && file?.name}</div>
        </UserContainer>
      </div>

      {sizeError && (
        <Modal size="flex-center h-[300]" callback={() => setSizeError(false)}>
          The file you are trying to upload is too large.
        </Modal>
      )}
    </>
  );
}
