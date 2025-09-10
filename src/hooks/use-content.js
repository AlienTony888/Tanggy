import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { getDocs, collection } from 'firebase/firestore';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    async function getContent() {
      if (!firebase.db) {
        return;
      }
      try {
        const contentCollection = collection(firebase.db, target);
        const querySnapshot = await getDocs(contentCollection);
        const allContent = querySnapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      } catch (error) {
        console.log(error.message);
      }
    }

    getContent();
  }, [target, firebase.db]);

  return { [target]: content };
}
