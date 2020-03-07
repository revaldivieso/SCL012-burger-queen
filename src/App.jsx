import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Waiter } from "./views/Waiter";
import { Kitchen } from "./views/Kitchen";
import { Home } from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Navigation} from "./components/Navigation";
import Data from "./components/data.json";
import MenuData from "./components/menu";
//import firebaseConfig from './firebaseInit.js';

const App = () => {
  return (
   
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <header><Navigation /></header>
          <Switch>
            <Route path="/waiter" component={Waiter} />
            <Route path="/kitchen" component={Kitchen} />
          </Switch>
        </div>
      </Router>
  );
};

export default App;
