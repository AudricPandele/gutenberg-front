import React, { Component } from 'react';
import Header from './Header.js';
import ArticleList from './articles/ArticleList.js';
import FolderNav from './folders/FolderNav.js';
import IsLogged from './Auth/isLogged.js';
import request from '../services/fetch.js';
import Cookies from 'universal-cookie';
import './../App.css';

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      folders: []
    }
  }

  componentDidMount() {
    const cookies = new Cookies();
    const token = "Bearer "+cookies.get('token');

    const fetchFolders = request("user/8/folders", token)
      .then(result => {
        this.setState({folders: result })
      });
  }

  render() {

    return (
      <div className="">
        <IsLogged></IsLogged>
        <Header></Header>
        <div className="container-fluid">
          <div className="row">

            {/* MENU GAUCHE */}
            <div className="col-md-2">
              <FolderNav
                data={this.state.folders}
              ></FolderNav>
            </div>

            {/* CONTENT MILLIEU */}
            <div className="col-md-9">
              <h1 className="text-center">Welcome to your dashboard. You can create a folder, add an article to a folder ...</h1>
            </div>

            {/* LEGER ESPACE DROITE */}
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
