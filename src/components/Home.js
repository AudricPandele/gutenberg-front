import React, { Component } from 'react';
import Header from './Header.js';
import IsLogged from './Auth/isLogged.js';
import './../App.css';

class Home extends Component {

  render() {
    return (
      <div className="">
        <Header></Header>
        <div className="container-fluid">
          <h1>Hello World !</h1>
        </div>
      </div>
    );
  }
}

export default Home;
