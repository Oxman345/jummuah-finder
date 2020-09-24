import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
  Link,
} from "react-router-dom";
import Home from "../Home"
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/"><Home/></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}