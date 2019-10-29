import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


import store from './store';
import { loadUser } from './actions/authActions';



import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'reactstrap';

import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import './App.css';

import AppNavbar from "./components/AppNavbar";
import Home from './components/Home';
import Footer from './components/Footer'
import Dashboard from './components/dashboard/Dashboard'



class App extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {

    const { isAuthenticated } = this.props.auth;

    return (
    
        <Router>
          <Route path="/" exact> 
            {isAuthenticated ? <Redirect to="/dashboard" /> : <Home />}
          </Route>
          <Route path="/dashboard" component={Dashboard} />   
        </Router>
    );
  }
}
/* 
  <Route path="/" exact component={Home} />     

<Route path="/edit/:id" component={CreateNote} />
          <Route path="/create" component={CreateNote} />
          <Route path="/user" component={CreateUser} />
*/



const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);

//export default App;
