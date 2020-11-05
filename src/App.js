import React from "react";
import "./App.css";
import {ShopPage} from "./pages/shop";
import HomePage from "./pages/homepage/HomepageComponent";
import { Switch, Route } from 'react-router-dom'

function App() {
   return (
      <div>
         <Switch>
            <Route exact path={'/'}>
               <HomePage/>
            </Route>
            <Route path={'/shop'}>
               <ShopPage/>
            </Route>
         </Switch>
      </div>
   );
}

export default App;
