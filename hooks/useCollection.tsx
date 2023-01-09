import { useState, useEffect } from "react";
import { db } from "@lib/config";
import { collection, onSnapshot } from "firebase/firestore";
import { FirebaseError } from "@firebase/util";

type CollectionObject = {
  id: string;
  title: string;
  name: string;
  content: string;
  rating: number;
  avatar: string;
}

export default function useCollection(col: string) {
  const [data, setData] = useState<null | Array<CollectionObject>>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    // invoke function with database we want connect to and its collection
    let ref = collection(db, col);

    // realtime listener that takes as arguments reference and function that is invoked every time data is changed
    const unsubscribe = onSnapshot(ref, snapshot => {
      let comments: Array<CollectionObject> = [];
      snapshot.docs.forEach(
        doc => {
          // create new object and add it to comments array
          comments?.push({ ...(doc.data() as any), id: doc.id as string });
        },
        (error: FirebaseError) => {
          setError(error.message as string);
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
