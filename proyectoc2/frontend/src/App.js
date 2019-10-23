import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store';
import { loadUser } from './actions/authActions';



import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'reactstrap';
import './App.css';

import AppNavbar from "./components/AppNavbar";
import Home from './components/Home';
import Footer from './components/Footer'


class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppNavbar />
          <Route path="/" exact component={Home} />

          <Footer/>
        </Router>
      </Provider>
    );
  }
}
/* 
<Route path="/edit/:id" component={CreateNote} />
          <Route path="/create" component={CreateNote} />
          <Route path="/user" component={CreateUser} />
*/
export default App;
