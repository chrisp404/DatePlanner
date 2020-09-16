import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import PrimarySearchAppBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//App landing Page. With Navbar etc. Right now empty.

function App() {
  return (
    <Router>
      {/* TODO Change this div to NavBar */}
      <div>
        <PrimarySearchAppBar/>
        {
          /*
          TODOs: depending on if authenticated render updated nav bar with profile options, app home page etc.
          */
        }
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/Signin">
            <SignIn/>
          </Route>
          <Route path="/Signup">
            <Signup/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


function LandingPage() {
  return (
    <div>
      <ul>
        <li><h2>1. Update landing page.</h2></li>
        <li><h2>2. Update NavBar to have two states, depending on authenticated</h2></li>

        <li><h2>Still missing email validation</h2></li>
        <li><h2>Still missing password verification on signup</h2></li>
      </ul>

      
    </div>
  );
}