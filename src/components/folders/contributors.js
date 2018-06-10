import React, { Component } from 'react';
import request from '../../services/fetch.js';
import Cookies from 'universal-cookie';
import './../../App.css';

class Contributors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      folder: null,
      showAddContrib: false,
      contribName: null
    }
  }

  displayAddContrib = () => {
    this.setState({ showAddContrib: !this.state.showAddContrib })
  }

  updateInputContribName = (evt) => {
    this.setState({
      contribName: evt.target.value
    });
  }

  addContrib = () => {
    if (this.state.contribName != null) {
      const cookies = new Cookies();
      const username = cookies.get('username')
      const body = JSON.stringify({
        contributor_username: this.state.contribName,
      });
      const data = request("user/"+username+"/folders/"+this.props.slug+"/contributors", cookies.get('token'), body, 'POST')
        .then(result => {
          this.getData(this.props.slug)
          this.setState({ showAddContrib: !this.state.showAddContrib })
        })
    }else{
      this.setState({ showAddContrib: !this.state.showAddContrib })
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.slug !== this.props.slug) {
      this.getData(nextProps.slug)
    }
  }

  componentDidMount = () => {
    this.getData(this.props.slug)
  }

  getData = (slug) => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const username = cookies.get('username');
    //const username = this.props.username.slice( 1 );

    const fetchContribs = request("user/"+username+"/folders/"+slug, token)
      .then(result => {
        this.setState({folder: result})
      });
  }

  render() {
    const folder = this.state.folder

    return (
      <div className="col-md-12">
        {folder ? (
          <img className="img-round-owner" src={this.state.folder.owner.image_url} ></img>
        ) : (
          "loading"
        )}

        {folder ? (
          folder.contributors.map((contrib) => {
            return (
              <img className="img-round-contrib" src={contrib.image_url} ></img>
            )
          })
        ) : (
          "loading"
        )}

        {this.state.showAddContrib ? (
            <div className="input-group mb-3">
              <input onChange={this.updateInputContribName} type="text" className="form-control" placeholder="Contributor username" aria-describedby="basic-addon2"></input>
              <div className="input-group-append">
                <button className="btn btn-outline-primary" onClick={this.addContrib} type="button">Add</button>
              </div>
            </div>
        ) : (
          <button onClick={this.displayAddContrib} className="btn-img-round-owner">+</button>
        )}
      </div>
    );
  }
}

export default Contributors;
