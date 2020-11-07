import React, {useEffect, useState} from "react";
import {Route, Switch} from 'react-router-dom'

import "./App.css";

import {HomePage,SignInAndSignUp,ShopPage} from "./pages";
import {Header} from "./components";
import {auth} from "./firebase/firebase.utils";

function App() {
   const [currentUser, setCurrentUser] = useState(null)

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user =>
         setCurrentUser(user))
      return () => unsubscribe()
   }, [])


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
