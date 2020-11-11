import React, {useEffect} from "react";

import  {Route, Switch, Redirect} from 'react-router-dom'

import "./App.css";

import {HomePage, SignInAndSignUp, ShopPage} from "./pages";
import {Header} from "./components";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user";
import {useDispatch, useSelector} from "react-redux";

function App() {
   const currentUser = useSelector(state => state.user.currentUser)
   const dispatch = useDispatch()

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async userAuth => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth)
            userRef.onSnapshot(snapshot =>
               dispatch(setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data()
               }))
            )
         }
         dispatch(setCurrentUser(userAuth))
         return () => unsubscribe()
      })
   }, [dispatch])

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
            <Route exact path={'/signin'}>
               {currentUser?<Redirect to={'/'}/>:<SignInAndSignUp/>}
            </Route>
         </Switch>
      </div>
   );
}

export default App;
