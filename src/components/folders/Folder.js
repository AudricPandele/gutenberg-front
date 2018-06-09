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

  handler = () => {
    this.getData()
  }

  componentDidMount = () => {
    this.getData()
  }

  // Set state when props change
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.slug !== prevState.slug) {
      return {
        slug: nextProps.slug,
      };
    }
    return null;
  }

  // if props are different call api to update articles
  componentDidUpdate(prevProps, prevState) {
    if (prevState.slug != this.state.slug) {
      this.getData()
    }
  }

  getData = () => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const username = cookies.get('username');
    //const username = this.props.username.slice( 1 );
    const fetchFolders = request("user/"+username+"/folders", token)
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
                action={this.handler}
                data={this.state.folders}
              ></FolderNav>
            </div>

            {/* CONTENT MILLIEU */}
            <div className="col-md-9 no-padding">
              <div className="col-md-12 text-center margin-bottom">
                <span className="2x badge badge-pill badge-primary text-center">{this.props.name}</span>
              </div>

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
