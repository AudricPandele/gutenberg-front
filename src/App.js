import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

// COMPONENTS
import Home from './components/Home.js';
import Login from './components/Auth/Login.js';
import Register from './components/Auth/Register.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
    );
  }
}

export default App;
