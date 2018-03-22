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

  element = <h1> Hello, {this.makeNameString(this.user)}!</h1>; //this.user ----> because the user variable is defined inside this component
  render() {
    //es6 syntax ---- instead of saying let render : () => {}, we say render() {//put the functionalities in here}
    return this.element;
  }
}

export default App;
