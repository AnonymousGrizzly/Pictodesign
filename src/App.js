import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/en/Home';
import Subhome from "./a_Temporary_Trash/SubHome"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>

            <Route path='/' exact component={Home} />

          <Route path="/login" component = {Subhome}/>
        </Switch>
      </Router>
    </>
  );
}