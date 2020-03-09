import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Waiter } from "./views/Waiter";
import { Kitchen } from "./views/Kitchen";
import { Home } from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Navigation} from "./components/Navigation";

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
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
