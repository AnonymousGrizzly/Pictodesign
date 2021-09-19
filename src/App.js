import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/en/Home';
import Login from "./components/AuthForm"
import Profile from "./components/profiles/UserProfile"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
}