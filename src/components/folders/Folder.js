import React, { Component } from 'react';
import Header from '../Header.js';
import ArticleList from '../articles/ArticleList.js';
import FolderNav from './FolderNav.js';
import IsLogged from '../Auth/isLogged.js';
import request from '../../services/fetch.js';
import Cookies from 'universal-cookie';
import './../../App.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      articles: []
    }
  }

  componentDidMount() {
    const cookies = new Cookies();
    const token = cookies.get('token');

    const fetchFolders = request("user/8/folders", token)
      .then(result => {
        this.setState({folders: result })
      });
  }

  render() {
    const fetchArticles = [
      {
        id:1,
        title: "Twitter",
        text: "Twitter le petit oiseau",
        link: "http://twitter.com",
        image: "https://images-eu.ssl-images-amazon.com/images/I/31KluT5nBkL.png"
      },
      {
        id:2,
        title: "Facebook",
        text: "Facebook le petit bouque",
        link: "http://facebook.com",
        image: "http://resize3-europe1.ladmedia.fr/r/620,310,FFFFFF,center-middle/img/var/europe1/storage/images/europe1/dossiers/facebook/9884834-2-fre-FR/facebook.jpg"
      }
    ];
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
              <h1 className="text-center">Welcome to {this.props.name}</h1>
              <ArticleList
                data={fetchArticles}
              ></ArticleList>
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
