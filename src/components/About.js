import React, { Component } from 'react';
import Header from './Header.js';
import './../App.css';

class About extends Component {

  render() {
    return (
      <div className="">
        <Header></Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1 className="text-center">What is Abestros ?</h1>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
