import React, { Component } from 'react';
import Header from './Header.js';
import IsLogged from './Auth/isLogged.js';
import './../App.css';

class Dashboard extends Component {

  render() {
    return (
      <div className="">
        <IsLogged></IsLogged>
        <Header></Header>
        <div className="container-fluid">
          <div className="row">

            {/* MENU GAUCHE */}
            <div className="col-md-2"></div>

            {/* CONTENT MILLIEU */}
            <div className="col-md-9">
              <h1 className="text-center">Welcome to your dashboard. You can create a folder, add an article to a folder ...</h1>
            </div>

            {/* LEGER ESPACE DROITE */}
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
