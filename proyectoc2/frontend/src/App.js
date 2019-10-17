import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navigation  from "./components/Navigation";
import CreateUser from './components/CreateUser'
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation/>      
      <Route path="/create" component={CreateUser} />
      <Route path="/login" component={Login} />
      <Footer/>
    </Router>
  
  );
}

export default App;
