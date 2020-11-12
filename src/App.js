import React, {useEffect} from "react";

import  {Route, Switch, Redirect} from 'react-router-dom'

import "./App.css";

import {HomePage, SignInAndSignUp, ShopPage} from "./pages";
import {Header} from "./components";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {selectCurrentUser, setCurrentUser} from "./redux/user";
import {useDispatch, useSelector} from "react-redux";
import {CheckoutPage} from "./pages";


function App() {
   const currentUser = useSelector(state => selectCurrentUser(state))
   const dispatchUser = useDispatch()

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async userAuth => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth)
            userRef.onSnapshot(snapshot =>
               dispatchUser(setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data()
               }))
            )
         }
         dispatchUser(setCurrentUser(userAuth))
         return () => unsubscribe()
      })
   }, [dispatchUser])

   return (
      <div>
         <Header/>
         <Switch>
            <Route exact path={'/'}>
               <HomePage/>
            </Route>

            <Route path={'/shop'}>
               <ShopPage/>
            </Route>

            <Route exact path={'/checkout'}>
               <CheckoutPage/>
            </Route>

            <Route exact path={'/signin'}>
               {currentUser ?
                  <Redirect to={'/'}/> :
                  <SignInAndSignUp/>
               }
            </Route>
         </Switch>
      </div>
   );
}

export default App;
