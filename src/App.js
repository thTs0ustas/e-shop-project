import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomepageComponent";
import { Switch, Route } from 'react-router-dom'

function App() {
   return (
      <div>
         <Switch>
            <Route exact path={'/'}>
               <HomePage/>
            </Route>
            <Route path={'/:menuItem'}/>
         </Switch>
      </div>
   );
}

export default App;
