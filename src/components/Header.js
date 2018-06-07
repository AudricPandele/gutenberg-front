import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import './../App.css';

class Header extends Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">Gutenberg</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse t-d-n" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={{ pathname: '/about'}}>
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Link to={{ pathname: '/login'}}>
              <a className="nav-link">Connexion</a>
            </Link>
          </span>
        </div>
      </nav>
    );
  }
}

export default Header;
