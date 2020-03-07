import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Waiter } from "./views/Waiter";
import { Kitchen } from "./views/Kitchen";
import { Home } from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Navigation} from "./components/Navigation"

//import firebaseConfig from './firebaseInit.js';

const App = () => {
  return (
   
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Navigation />
          
          <Switch>
            <Route exact path="/waiter" component={Waiter} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
  );
};

export default App;
