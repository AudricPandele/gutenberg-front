import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

class IsLogged extends Component {

  componentDidMount(){}

  render() {
    const cookies = new Cookies();
    const token = cookies.get('token');
    if(token == null){
      return(<Redirect to='/login' />);
    }
    else{
      return (
        <div></div>
      );
    }
  }
}

export default IsLogged;
