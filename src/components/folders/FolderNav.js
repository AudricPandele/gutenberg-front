import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './../../App.css';

class FolderNav extends Component {

  render() {

    const cookies = new Cookies();
    const username = cookies.get('username');
    const list = this.props.data.map((query) => {
      const pathFolder = '/@'+username+'/folder/'+query.slug;
      return (
        <li className="list-group-item">
          <Link to={{ pathname: pathFolder, id: query.id, username: query.owner, name: query.name }}>
            {query.name}
          </Link>
        </li>
      );
    });

    return (
      <ul className="list-group list-group-flush">
        {list}
      </ul>
    );
  }
}

export default FolderNav;
