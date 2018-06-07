import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import Header from '../Header.js';
import { Link } from 'react-router-dom';

class Register extends Component {

  componentDidMount(){}

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
                  <input type="text" class="form-control" id="inputFirstName4" placeholder="John" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputLastName4">Last name</label>
                  <input type="text" class="form-control" id="inputLastName4" placeholder="Doe" />
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail">eMail</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="john.doe@gmail.com" />
              </div>
              <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="$_Bogota-1234" />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputUsername">Username</label>
                  <input type="text" class="form-control" id="inputUsername" placeholder="JohnDoeBidou" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputState">Profil picture</label>
                  <input type="url" id="inputPicture" class="form-control" placeholder="http://johndoe.com/picture.jpg"/>
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
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }
}

export default Register;
