import React, { Component } from 'react';
import Header from '../Header.js';
import ArticleList from '../articles/ArticleList.js';
import FolderNav from './FolderNav.js';
import Contributors from './contributors.js';
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
      slug: this.props.slug,
      showAddArticle: false,
      url: ''
    }
  }

  displayAddArticle = () => {
    this.setState({ showAddArticle: !this.state.showAddArticle })
  }

  updateInputArticleUrl = (evt) => {
    this.setState({
      url: evt.target.value
    });
  }

  addArticle = () => {
    if (this.state.url != '') {
      const cookies = new Cookies();
      const username = cookies.get('username')
      const body = JSON.stringify({
        url: this.state.url,
      });
      const data = request("user/"+username+"/folders/"+this.props.slug+"/articles", cookies.get('token'), body, 'POST')
        .then(result => {
          this.getData()
          this.setState({ showAddArticle: !this.state.showAddArticle })
        })
    }else{
      this.setState({ showAddArticle: !this.state.showAddArticle })
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
            <div className="col-md-9">
                <div className="row">
                  <div className="col-md-5 margin-bottom no-padding">
                    { this.state.showAddArticle ? (
                      <div>
                        <div className="input-group mb-3">
                          <input onChange={this.updateInputArticleUrl} type="text" className="form-control" placeholder="Article URL" aria-describedby="basic-addon2"></input>
                          <div className="input-group-append">
                            <button className="btn btn-outline-primary" onClick={this.addArticle} type="button">Add</button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <button className="rounded btn btn-outline-primary" onClick={this.displayAddArticle} type="button">Add article</button>
                    )}
                  </div>
                  <div className="col-md-2 text-center margin-bottom no-padding">
                    <span className="2x badge badge-pill badge-primary text-center">{this.props.name}</span>
                  </div>
                  <div className="col-md-5 no-padding"></div>
                </div>

                <div className="row margin-bottom">
                  <Contributors slug={this.state.slug} />
                </div>


                <div className="row">
                  <ArticleList
                    data={this.state.articles}
                  ></ArticleList>
                </div>
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
