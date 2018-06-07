import React, { Component } from 'react';
import Article from './Article.js';
import './../App.css';

class ArticleList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const list = this.props.data.map((query) => {
        return (
          <Article
            title={query.title}
            text={query.text}
            link={query.link}
            image={query.image}
          >
          </Article>
        );
    });

    return (
      <div className="">
        {list}
      </div>
    );
  }
}

export default ArticleList;
