import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";

import { CheckoutPage, HomePage, ShopPage, SignInAndSignUp } from "./pages";
import { Header } from "./components";
import { useApp } from "./useApp";

function App() {
  const currentUser = useApp();
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route path={"/shop"}>
          <ShopPage />
        </Route>

        <Route exact path={"/checkout"}>
          <CheckoutPage />
        </Route>

        <Route exact path={"/signin"}>
          {currentUser ? <Redirect to={"/"} /> : <SignInAndSignUp />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// const currentUser = useSelector(state => selectCurrentUser(state))
// const dispatchUser = useDispatch()
//
// useEffect(() => {
// 	const unsubscribe = auth.onAuthStateChanged(async userAuth => {
// 		if (userAuth) {
// 			const userRef = await createUserProfileDocument(userAuth)
// 			userRef.onSnapshot(snapshot =>
// 				dispatchUser(setCurrentUser({
// 					id: snapshot.id,
// 					...snapshot.data()
// 				}))
// 			)
// 		}
// 		dispatchUser(setCurrentUser(userAuth))
// 		return () => unsubscribe()
// 	})
// }, [dispatchUser])
