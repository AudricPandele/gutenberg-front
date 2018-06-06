import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import './../App.css';

class Header extends Component {

  render() {

    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Gutenberg</a>
      </nav>
    );
  }
}

export default Header;
