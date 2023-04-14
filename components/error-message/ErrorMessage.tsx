import Modal from "@components/modal/Modal";

export default function ErrorMessage({ error }: { error: string | null }) {
  return (
    <>
      {error && (
        <Modal size="flex-center h-[245px]">
          <p>An error has occurred: {error}</p>
        </Modal>
      )}
    </>
  );
}
