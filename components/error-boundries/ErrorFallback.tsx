import Button from "@components/ui/button/Button";
import Modal from "@components/ui/modal/Modal";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
};

export default function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <Modal size="w-full h-full md:h-1/2 flex-center flex-col gap-2">
      <strong>{error.message}</strong>
      <Button
        className="font-bold p-4 text-sm text-center text-white bg-primary-clr rounded-lg hover:bg-secondary-clr hover:text-primary-clr"
        onClick={resetErrorBoundary}>
        Try again
      </Button>
    </Modal>
  );
}
