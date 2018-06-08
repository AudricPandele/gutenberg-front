import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import request from '../../services/fetch.js';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      redirect: false,
      username: "",
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      image_url: ""
    };
  }

  updateInputUsername = (evt) => {
    this.setState({
      username: evt.target.value
    });
  }

  updateInputEmail = (evt) => {
    this.setState({
      email: evt.target.value
    });
  }

  updateInputPassword = (evt) => {
    this.setState({
      password: evt.target.value
    });
  }

  updateInputFirstName = (evt) => {
    this.setState({
      first_name: evt.target.value
    });
  }

  updateInputLastName = (evt) => {
    this.setState({
      last_name: evt.target.value
    });
  }

  updateInputImageUrl = (evt) => {
    this.setState({
      image_url: evt.target.value
    });
  }

  componentDidMount(){}

  signup = () => {
    const cookies = new Cookies();
    const body = JSON.stringify({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      last_name: this.state.last_name,
      first_name: this.state.first_name,
      image_url: this.state.image_url
    });
    const data = request("auth/signup", null, body, 'POST')
      .then(result => {
        cookies.set('id', result.id)
        cookies.set('token', result.token)
        cookies.set('username', result.user.username)
        cookies.set('image_url', result.user.image_url)
        this.setState({ redirect: true })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputFirstName4">First name</label>
                  <input type="text" class="form-control" id="inputFirstName4" placeholder="John" value={this.state.first_name} onChange={this.updateInputFirstName}/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputLastName4">Last name</label>
                  <input type="text" class="form-control" id="inputLastName4" placeholder="Doe" value={this.state.last_name} onChange={this.updateInputLastName}/>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail">eMail</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="john.doe@gmail.com" value={this.state.email} onChange={this.updateInputEmail}/>
              </div>
              <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="$_Bogota-1234" value={this.state.password} onChange={this.updateInputPassword}/>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputUsername">Username</label>
                  <input type="text" class="form-control" id="inputUsername" placeholder="JohnDoeBidou" value={this.state.username} onChange={this.updateInputUsername}/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputState">Profil picture</label>
                  <input type="url" id="inputPicture" class="form-control" placeholder="http://johndoe.com/picture.jpg" value={this.state.image_url} onChange={this.updateInputImageUrl}/>
                </div>
                <div class="form-group col-md-6">
                  <small>Already have an account ? </small>
                  <small>
                    <Link to={{pathname: '/login'}}>
                      Connexion
                    </Link>
                  </small>
                </div>
              </div>
              <a onClick={this.signup} className="btn btn-primary text-white">
                Subscribe
              </a>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }
}

export default Register;
