import React from "react";
import { Switch, Route } from 'react-router-dom'

import "./App.css";

import {ShopPage} from "./pages/shop";
import HomePage from "./pages/homepage/HomepageComponent";
import {Header} from "./components/header";
import {SignInAndSignUp} from "./pages/signInAndSignUp";

function App() {
   return (
      <div>
         <Header/>
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
