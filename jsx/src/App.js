import React, { Component } from 'react';
import './App.css';

class App extends Component {
  makeNameString({ firstName, lastName }) {
    return firstName + ' ' + lastName;
  }

  user = {
    firstName: 'Arwa',
    lastName: 'Kuterwadliwala'
  };

  element = <h1> Hello, {this.makeNameString(this.user)}!</h1>;
  render() {
    return this.element;
  }
}

export default App;
