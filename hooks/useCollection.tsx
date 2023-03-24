import { FirebaseError } from "@firebase/util";
import { db } from "@lib/config";
import { Comment } from "domain/types";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useCollection(col: string) {
  const [data, setData] = useState<null | Comment[]>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    // invoke function with database we want connect to and its collection
    let ref = collection(db, col);

    // realtime listener that takes as arguments reference and function that is invoked every time data is changed
    const unsubscribe = onSnapshot(ref, snapshot => {
      let comments: Comment[] = [];
      snapshot.docs.forEach(
        doc => {
          // create new object and add it to comments array
          comments?.push({ ...doc.data(), id: doc.id } as Comment);
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
