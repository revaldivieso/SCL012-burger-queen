import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Waiter } from './Waiter';
import { Kitchen } from './Kitchen';
import { Home } from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MENU from './data.json';
console.log(MENU);


export default function App() {
  return (
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route exact path="/waiter" component={Waiter} />
        <Route path="/kitchen" component={Kitchen} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>

  );
};
