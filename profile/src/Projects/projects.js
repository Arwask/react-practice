import React, { Component } from 'react';
import './projects.css';
import ionic from './ionic.png';
import onTheClock from './ontheclock.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="projects" id="myProjects">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">smart-list</h4>
                <img className="card-img-top" src={ionic} alt="Card image cap" />
                <p className="card-text">
                  A mobile app that never lets you forget important ingredients from your recipes. Generate an
                  ingredient selector list directly from recipe and make your shopping list from there. This app is made
                  in Ionic 1 with the help of firebase as the database.
                  <br />
                  <br />
                  <span className="note">(NOTE: This app is best viewed in mobile as its a mobile app.)</span>
                </p>
                <a href="https://github.com/Arwask/FrontendCapstone_SmartList" className="btn">
                  <i className="fab fa-github" />
                </a>
                <a href="https://smart-list-d50e4.firebaseapp.com/#/" className="btn">
                  <i className="fa fa-globe" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">onTheClok</h4>
                <img className="card-img-top" src={onTheClock} alt="Card image cap" />
                <p className="card-text">
                  This app's main aim is to help managers ease their process of making schedules for employees working
                  in their department. It has two views, Manager's and Employee's view with different functionalities.
                  The project is made in using NodeJs as server and express framework with pug.
                </p>
                <a href="https://github.com/Arwask/Schedule-app" className="btn">
                  <i className="fab fa-github" />
                </a>
                <a href="https://on-the-clock.herokuapp.com/" className="btn">
                  <i className="fa fa-globe" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
