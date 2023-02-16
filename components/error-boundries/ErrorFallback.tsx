import Button from "@components/ui/button/Button";
import Modal from "@components/ui/modal/Modal";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
};

export default function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <Modal size="w-full h-full md:h-1/2 flex-center">
      {error.message}
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Modal>
  );
}
