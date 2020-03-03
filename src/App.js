import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';
import { Waiter } from './Waiter';
import { Kitchen } from './Kitchen';
import { Home } from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
            <Link to='/'>
              <Button>
                Home
              </Button>
            </Link>
          <Link to='/waiter'>
              <Button>
                Pedidos
              </Button>
            </Link>
          <Link to='/kitchen'>
              <Button>
                Cocina
              </Button>
            </Link>
        </ul>
      </nav>
    </div>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/waiter">
          <Waiter />
        </Route>
        <Route path="/kitchen">
          <Kitchen />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>

  );
};
