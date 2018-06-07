import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import Header from '../Header.js';
import { Link } from 'react-router-dom';

class Login extends Component {

  componentDidMount(){}

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="john.doe@gmail.com" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" />
              </div>
              <div className="form-group t-d-n">
                <small>Not yet subscribe ? </small>
                <small>
                  <Link to={{pathname: '/register'}}>
                    Create your account
                  </Link>
                </small>
              </div>
              <button type="submit" className="btn btn-primary">Connexion</button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }
}

export default Login;
