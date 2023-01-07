import { useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string | undefined) => Promise<boolean>;

export default function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copyToClipboard: CopyFn = async text => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");

      return false;
    }

    try {
      await navigator.clipboard.writeText(text as string);

      setCopiedText(text as string);

      return true;
    } catch (error) {
      console.warn("Copy failed", error);

      setCopiedText(null);

      return false;
    }
  };

  return [copiedText, copyToClipboard];
}
