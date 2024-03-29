import { ExtendedPOIDetails } from "domain/api-types";
import { useEffect, useState } from "react";

export default function useFetch(query: number[], debouncedMaxResults: number) {
  const [data, setData] = useState<ExtendedPOIDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [lat1, lng1, lat2, lng2] = query || [];

  const controller: AbortController = new AbortController();

  useEffect(() => {
    if (!lat1) return;

    const signal = controller.signal as AddEventListenerOptions;

    (async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        if (query) {
          const url = `/.netlify/functions/token-hider?output=json&maxresults=${debouncedMaxResults}&bbox=(${lat1},${lng1}),(${lat2},${lng2}) `;

          const response = await fetch(url, signal);

          if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            setError(message);
            setLoading(false);
          }

          const data = await response.json();
          setData(data);
          setLoading(false);
        }
      } catch (error: unknown) {
        const message = `An error has occurred: ${(error as Error).message}`;
        setError(message);
        setLoading(false);
      }
    })();

    return () => controller.abort("cancel request");
  }, [lat1, lng1, lat2, lng2, debouncedMaxResults]);

  return { data, loading, error };
}
