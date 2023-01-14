import { useState } from "react";

type CopiedValue = string | null;
type ErrorType = string | null;
type CopyFn = (text: string | undefined) => Promise<boolean>;

export default function useCopyToClipboard(): [ErrorType, CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const [error, setError] = useState<ErrorType>(null);

  const copyToClipboard: CopyFn = async text => {
    if (!navigator?.clipboard) {
      setError("Clipboard not supported");

      return false;
    }

    try {
      await navigator.clipboard.writeText(text as string);

      setCopiedText(text as string);

      return true;
    } catch (error) {
      setError("Copy failed");

      setCopiedText(null);

      return false;
    }
  };

  return [error, copiedText, copyToClipboard];
}
