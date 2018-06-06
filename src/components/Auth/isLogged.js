import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

class IsLogged extends Component {

  componentDidMount(){
    const cookies = new Cookies();
    const token = cookies.get('token');
  }

  render() {
    if(cookies.get('token') == null){
      return(<Redirect to='/login' />);
    }
    else{
      return (
        <div>
        </div>
      );
    }
  }
}

export default IsLogged;
