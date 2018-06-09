import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './../../App.css';
import request from '../../services/fetch.js';

class FolderNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      folderName: '',
      showAddFolder: false
    }
  }

  displayAddFolder = () => {
    this.setState({ showAddFolder: !this.state.showAddFolder })
  }

  addFolder = () => {
    const cookies = new Cookies();
    const body = JSON.stringify({
      name: this.state.folderName,
      slug: this.state.folderName.toLowerCase(),
      owner: cookies.get('id'),
      is_public: true
    });
    const data = request("folder", cookies.get('token'), body, 'POST')
      .then(result => {
        this.props.action()
        this.setState({ showAddFolder: !this.state.showAddFolder })
      })
  }

  updateInputFolderName = (evt) => {
    this.setState({
      folderName: evt.target.value
    });
  }

  render() {

    const cookies = new Cookies();
    const username = cookies.get('username');
    const list = this.props.data.map((query) => {
      const pathFolder = '/@'+username+'/folder/'+query.slug;
      return (
        <li className="list-group-item">
          <Link className="secondary" to={{ pathname: pathFolder, id: query.id, username: query.owner, name: query.name }}>
            <span className="primary bold">#</span> {query.name}
          </Link>
        </li>
      );
    });

    return (
      <div>
        <ul className="list-group list-group-flush">
          {list}
        </ul>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            { this.state.showAddFolder ? (
              <div>
                <div class="input-group mb-3">
                  <input onChange={this.updateInputFolderName} type="text" class="form-control" placeholder="Folder name" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary" onClick={this.addFolder} type="button">Add</button>
                  </div>
                </div>
              </div>
            ) : (
              <a onClick={this.displayAddFolder} className="secondary add-button">Add folder</a>
            )}
          </li>
        </ul>
      </div>

    );
  }
}

export default FolderNav;
