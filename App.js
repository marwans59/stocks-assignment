import React from "react";
import ReactDOM from "react-dom";
import'./index';
import Home from './pages/Home' ;
import Asset from './pages/Assets'
import Detail from './pages/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div class="main-header">
          <ul>
            <li class="menu__list-item">
              <Link to="/">Home</Link>
            </li>
            <li class="menu__list-item">
              <Link to="/Assets">Assets</Link>
            </li>
            <li class="menu__list-item">
              <Link to="/Details">Details</Link>
            </li>
          </ul>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Assets">
            <Assets />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

    </Router>
  );
}



function Details() {
  return <Detail/>;
}

function Assets() {
  return <Asset/>;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
