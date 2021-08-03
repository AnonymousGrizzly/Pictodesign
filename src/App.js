import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/en/Home';
import Subhome from "./components/en/SubHome"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyContextProvider from "./contexts/MyContext";






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