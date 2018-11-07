import React, { Component } from 'react';
import Cookies from 'js-cookie';

const styles = {};

styles.wrapper = {
  textAlign: "center",
  width: "90vw",
  height: "90vh",
  paddingTop: "10vh",
  paddingLeft: "10vw"
}
class App extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <h3>Hi, { Cookies.get('name') }!</h3>
      </div>
    );
  }
}

export default App;
