import { selectCurrentUser, setCurrentUser } from "./redux/user";
import { useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";

export function useApp() {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const dispatchUser = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) =>
          dispatchUser(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          )
        );
      }
      dispatchUser(setCurrentUser(userAuth));
      return () => unsubscribe();
    });
  }, [dispatchUser]);
  return currentUser;
}
