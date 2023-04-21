import Modal from "@components/modal/Modal";
import DragAndDrop from "@components/ui/drag&drop/DragAndDrop";
import UserContainer from "@components/user-container/UserContainer";
import useToggle from "@hooks/useToggle";
import { photoUploadActions } from "domain/constants";
import { PhotoUpload } from "domain/types";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG"];

export default function POIPhotos() {
  const [file, setFile] = useState<PhotoUpload>();
  const { isShown: sizeError, handleOnShow: setSizeError } = useToggle();

  const uploadErrorMsg: JSX.Element | null = sizeError ? (
    <Modal size="flex-center h-[300]" onModalClose={() => setSizeError(false)}>
      The file you are trying to upload is too large.
    </Modal>
  ) : null;

  function handleUpload(file: PhotoUpload): void {
    setFile(file);
  }
  // message if it was successfully uploaded or not

  const isNotLoggedInMessage: JSX.Element = (
    <h2 className="text-md lg:text-xl font-bold text-dark-text-clr text-center mt-12">
      {photoUploadActions.uploadPhoto}
    </h2>
  );

  return (
    <>
      <UserContainer fallback={isNotLoggedInMessage}>
        <div className="w-full flex-center flex-col">
          <FileUploader
            handleChange={handleUpload}
            onSizeError={() => setSizeError(true)}
            name="file"
            types={fileTypes}
            maxSize={1}>
            <DragAndDrop />
          </FileUploader>
          <div className="mt-8">{file?.name}</div>
        </div>
      </UserContainer>
      {uploadErrorMsg}
    </>
  );
}
