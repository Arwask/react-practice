import React, { Component } from 'react';
import './App.css';

// Timer component's job is to return the current time every 1000ms. The App component extends the Timer component
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    }; // initial state of the app when it starts
  }
  componentDidMount() {
    // you can only change the state inside a componentDidMount method. This method is called right after the component is mounted
    this.timerID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    // this will tear down the timer when the component is unmounted
    clearInterval(this.timerID);
  }
  render() {
    return <div>Time is: {this.state.time}</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTime: this.props.time // props is passed on from parent component along with its state.
    };
    // initial state of the app when it starts
  }
  makeNameString({ firstName, lastName }) {
    return firstName + ' ' + lastName;
  }

  user = {
    firstName: 'Arwa',
    lastName: 'Kuterwadliwala'
  };

  nextEl = React.createElement('h1', { className: 'greeting' }, 'Welcome to my React App!');
  element = <p> Hello, {this.makeNameString(this.user)}!</p>; //this.user ----> because the user variable is defined inside this component
  // render() {
  //   //es6 syntax ---- instead of saying let render : () => {}, we say render() {//put the functionalities in here}
  //   return this.nextEl;
  // }

  render() {
    // React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state. So here, only the timer will update and the rest stays same.
    return (
      <div>
        <div className="yellowBg">{this.nextEl}</div>
        <div>{this.element}</div>
        <Timer />
      </div>
    );
  }
}

export default App;
