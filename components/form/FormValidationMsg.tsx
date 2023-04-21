export default function FormValidationMsg({ message }: { message: string }) {
  return (
    <>
      {message && (
        <div
          role="alert"
          aria-describedby="error"
          className="min-h-24 font-bold text-sm flex-center mb-2 -mt-2 bg-red-100 p-2">
          <span className="text-warning-clr">{message}</span>
          <span id="error" className="sr-only">
            {message}
          </span>
        </div>
      )}
    </>
  );
}
