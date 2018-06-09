import React, { Component } from 'react';
import './../../App.css';

class Article extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <h5 className="card-title"><a className="secondary" href={this.props.link} target="_blank">{this.props.title}</a></h5>
              <p className="card-text text-preview">{this.props.text} ...</p>
            </div>
            <div className="col-md-4">
              <img className="card-img" src={this.props.image}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
