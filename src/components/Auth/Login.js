import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import { Link, Redirect } from 'react-router-dom';
import request from '../../services/fetch.js';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      redirect: false,
      email: "",
      password: ""
    };
    this.updateInputEmail = this.updateInputEmail.bind(this);
    this.updateInputPassword = this.updateInputPassword.bind(this);
  }

  componentDidMount(){}

  updateInputEmail(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  updateInputPassword(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  login = () => {
    const cookies = new Cookies();
    const body = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    });
    const method = 'POST';
    const data = request("auth/signin", null, body, method)
      .then(result => {
        cookies.set('id', result.user.id)
        cookies.set('token', result.token)
        cookies.set('username', result.user.username)
        cookies.set('image_url', result.user.image_url)
      })
  }

  render() {

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" id="InputEmail" placeholder="john.doe@gmail.com" value={this.state.email} onChange={this.updateInputEmail} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="InputPassword" placeholder="" value={this.state.password} onChange={this.updateInputPassword}/>
              </div>
              <div className="form-group t-d-n">
                <small>Not yet subscribe ? </small>
                <small>
                  <Link to={{pathname: '/register'}}>
                    Create your account
                  </Link>
                </small>
              </div>
                <Link onClick={this.login} to={{pathname:'/dashboard'}} >
                  <div classname="btn btn-primary text-white">Login</div>
                </Link>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }
}

export default Login;
