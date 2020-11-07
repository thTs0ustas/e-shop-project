import React, {useEffect, useState} from "react";
import {Route, Switch} from 'react-router-dom'

import "./App.css";

import {HomePage, SignInAndSignUp, ShopPage} from "./pages";
import {Header} from "./components";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

function App() {
   const [currentUser, setCurrentUser] = useState({})

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async userAuth => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth)
            userRef.onSnapshot(snapshot => {
               setCurrentUser({id: snapshot.id, ...snapshot.data()})
            })
         }
         setCurrentUser(userAuth)
         return () => unsubscribe()
      })
   }, [])
   console.log(currentUser)


   return (
      <div>
         <Header currentUser={currentUser}/>
         <Switch>
            <Route exact path={'/'}>
               <HomePage/>
            </Route>
            <Route path={'/shop'}>
               <ShopPage/>
            </Route><Route path={'/signin'}>
            <SignInAndSignUp/>
         </Route>
         </Switch>
      </div>
   );
}

export default App;
