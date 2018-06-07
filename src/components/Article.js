import React, { Component } from 'react';
import './../App.css';

class Article extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="columns card-padding">
        <div className="card article-card">
          <div className="card-content">
            <div className="columns">
              <div className="column is-mobile is-three-quarters">
                <div className="columns col-padding">
                  <div className="media-content">
                    <a href={this.props.link} target="_blank" className="title is-4">{this.props.title}</a>
                  </div>
                </div>
                <div className="columns col-padding">
                  <div className="content text-preview-wrapper">
                    <p className="text-preview">{this.props.text}</p>
                  </div>
                </div>
              </div>
              <div className="column is-mobile is-one-quarter">
                <div className="media">
                  <figure>
                    <img src={this.props.image} className="card-img" alt="Placeholder"></img>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
