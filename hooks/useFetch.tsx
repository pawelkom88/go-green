import { useState, useEffect } from "react";
import { BoundingBox } from "domain/types";
import { POIDetails } from "domain/api-types";

export default function useFetch(query: BoundingBox) {
  const [data, setData] = useState<POIDetails[]>([]);
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
          const url = `/.netlify/functions/token-hider?bbox=(${lat1},${lng1}),(${lat2},${lng2})`;

          const response = await fetch(url, signal);

          if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            setError(message);
            setLoading(false);
          }

          const data = await response.json();
          setData(data);
          setLoading(false);
        }
      } catch (error: unknown) {
        const message = `An error has occured: ${(error as Error).message}`;
        setError(message);
        setLoading(false);
      }
    })();

    return () => controller.abort("cancel request");
  }, [lat1, lng1, lat2, lng2]);

  return { data, loading, error };
}
