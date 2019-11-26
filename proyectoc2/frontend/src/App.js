import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';

import Home from './components/Home';
import Dashboard from './components/dashboard/Dashboard';
import DeckFlashcards from './components/DeckFlashcards';
import StudyLesson from './components/StudyLesson';

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
          <Switch>

          <Route path="/study/:id/" exact component={StudyLesson} />

          <Route path="/decks/:id/cards" exact component={DeckFlashcards} />

          <Route path="/dashboard/:id/decks"
            exact strict 
            render={(props) => <Dashboard {...props} isMain={false} />}          
          />      

          <Route path="/dashboard"             
            render={(props) => <Dashboard {...props} isMain={true} />}          
          />     
          <Route path="/" exact> 
            {isAuthenticated ? 
            <Redirect to={{
              pathname: "/dashboard",
              isMain: true
            }}
            /> :            
            <Home />}
          </Route> 

          </Switch>
         
        </Router>
    );
  }
}
/* 
          <Route path="/dashboard" component={Dashboard} isMain />

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
