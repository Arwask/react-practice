import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import About from './About/about';
import Home from './Home/home';
import Projects from './Projects/projects';
import Contact from './contact/contact';

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about-me" component={About} />
      <Route exact path="/my-projects" component={Projects} />
      <Route exact path="/contact-me" component={Contact} />
    </div>
  </Router>,
  document.querySelector('#root')
);
registerServiceWorker();
