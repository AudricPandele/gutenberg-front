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
      articles: [],
      slug: this.props.slug
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.slug != this.props.slug) {
      this.setState({'slug': nextProps.slug});
    }
  }

  componentDidMount() {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const id = cookies.get('id');
    const username = this.props.username.slice( 1 );
    const fetchFolders = request("user/"+id+"/folders", token)
      .then(result => {
        this.setState({folders: result })
      });

    const fetchArticles = request("user/"+username+"/folders/"+this.state.slug+"/articles", token)
      .then(result => {
        this.setState({articles: result})
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
              <h1 className="text-center">Welcome to {this.props.name}</h1>
              <ArticleList
                data={this.state.articles}
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
