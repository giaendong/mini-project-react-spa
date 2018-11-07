import React, { Component } from 'react';
import Cookies from 'js-cookie';

const API_ROOT = 'https://web-design-mini-project.firebaseapp.com/api/v1/'

const styles = {};

styles.wrapper = {
  textAlign: "center",
  width: "90vw",
  height: "90vh",
  paddingTop: "10vh",
  paddingLeft: "10vw"
}
styles.form = {
  width: "200px",
  height: "200px",
  margin: "0 auto"
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      nameList: null,
    };

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUser = this.getUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const self = this;
    return fetch(`${ API_ROOT }users`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }})
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(parsedResponse => {
        self.setState({ nameList: parsedResponse.user })
      })
      .catch( err => 
        console.log(err)
      );
  }

  addUser(name) {
    const self = this;
    const body = JSON.stringify({ "name": name })
    return fetch(`${ API_ROOT }users`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }})
      .then(response => {
        console.log(response);
        if (response.ok) {
          return response;
        }
      })
      .then(parsedResponse => {
        console.log(parsedResponse);
        self.getUser();
      })
      .catch( err => 
        console.log(err)
      );
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    Cookies.set('name', this.state.name);
    this.addUser(this.state.name);
  }

  renderName(item, nameList) {
    return (
      <li>{nameList[item].name}</li>
    );
  }

  render() {
    const { nameList } = this.state;
    return (
      <div style={styles.wrapper}>
      {
        Cookies.get('name') ?
        <h3>Hi, { Cookies.get('name') }. Your Name Saved on Cookie!</h3> :
        <h3>Please Input Your Name</h3>
      }
        <form style={styles.form} onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' name='name' onChange={this.handleName} />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <h5>Last Seen Name : </h5>
        <ul>
          {
            nameList ? Object.keys(nameList).map((item) => {
                return this.renderName(item, nameList);
              }) : null 
          }
        </ul>
        <p>Last Seen Name use Firestore API to store the data.<br />Name displayed here is last updated name</p>
      </div>
    );
  }
}

export default App;
