import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Modal from 'react-responsive-modal';
import './../App.css';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    function logoutClick () {
      const cookies = new Cookies();
      cookies.remove('token');
      cookies.remove('id');
      cookies.remove('username');
      cookies.remove('image_url');
    }

    const cookies = new Cookies();
    const token = cookies.get('token');
    const username = cookies.get('username');
    const img_url = cookies.get('image_url');
    function Nav () {
      if(token != null){
        return (
          <div>
            <img src={img_url} width="30px" className="picture mr-3"></img>
            <span className="navbar-text mr-3">{username}</span>
            <span className="navbar-text">
              <Link to={{ pathname: '/'}} onClick={logoutClick}>
                <a className="">Logout</a>
              </Link>
            </span>
          </div>
        )
      } else {
        return (
          <span className="navbar-text">
            <Link to={{ pathname: '/login'}}>
              <a className="">Login</a>
            </Link>
          </span>
        )
      }
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">Gutenberg</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse t-d-n" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={{ pathname: '/dashboard'}}>
                <a className="nav-link">Dashboard</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={{ pathname: '/about'}}>
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
          <Nav></Nav>
        </div>
      </nav>
    );
  }
}

export default Header;
