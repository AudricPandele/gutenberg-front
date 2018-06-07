import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

// COMPONENTS
import About from './components/About.js';
import Dashboard from './components/Dashboard.js';
import Folder from './components/Folder.js';
import Home from './components/Home.js';
import Login from './components/Auth/Login.js';
import Register from './components/Auth/Register.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route path='/folder/:slug' render={props =>
          <div className="">
            <Folder slug={props.match.params.slug} id={props.location.id} name={props.location.name}/>
          </div> }
        />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
    );
  }
}

export default App;
