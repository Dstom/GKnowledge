import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navigation  from "./components/Navigation";
import CreateUser from './components/CreateUser'

function App() {
  return (
    <Router>
      <Navigation/>

      <div className="container p-4">      
      <Route path="/create" component={CreateUser} />
      </div>
    </Router>
  
  );
}

export default App;
