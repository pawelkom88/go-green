import { useState, useEffect } from "react";
import { db } from "@lib/config";
import { collection, onSnapshot } from "firebase/firestore";
import { FirebaseError } from "@firebase/util";
import { CollectionObject } from "domain/types";

export default function useCollection(col: string) {
  const [data, setData] = useState<null | CollectionObject[]>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    // invoke function with database we want connect to and its collection
    let ref = collection(db, col);

    // realtime listener that takes as arguments reference and function that is invoked every time data is changed
    const unsubscribe = onSnapshot(ref, snapshot => {
      let comments: CollectionObject[] = [];
      snapshot.docs.forEach(
        doc => {
          // create new object and add it to comments array
          comments?.push({ ...(doc.data() as any), id: doc.id ?? "" });
        },
        (error: FirebaseError) => {
          setError(error.message);
        }
      );

      //update state with newly created array
      setData(comments);
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, [col]);

  return { data, error };
}
