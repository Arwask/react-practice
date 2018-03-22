import React, { Component } from 'react';
import './App.css';

let makeNameString = ({ firstName, lastName }) => {
  return firstName + ' ' + lastName;
};

const user = {
  firstName: 'Arwa',
  lastName: 'Kuterwadliwala'
};

const element = <h1> Hello, {makeNameString(user)}!</h1>;

class App extends Component {
  render() {
    return element;
  }
}

export default App;
