import React, { Component } from 'react';
import './about.css';
import arwa from './arwa.JPG';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about">
        <div className="profile">
          <img src={arwa} alt="profile-picture" className="profilePicture" />
        </div>
        <div className="text">
          <p>
            My love for programming began when I was introduced to C and C++ languages in the 10th grade. Since then, I
            wanted to become a software developer. This encouraged me to go forward with my passion and pursue Bachelors
            of Engineering in Information Technology. The 4 year degree program gave me a very good introduction to the
            theoretical and practical concept of many languages like C, C++, JAVA, C# dotNet, VB and SQL.
          </p>

          <p>
            Right after finishing my degree, I accepted an ad hoc lecturer position to teach Data Communication and
            Networking. After teaching for a semester, I further advanced my programming skills by completing a
            certification course in SQL.
          </p>

          <p>
            Moving to USA from India was a very big change for me and the supervisor job at Barnes and Noble helped me
            to get acquainted with the culture and language of this country. However, I kept myself engaged with current
            technologies and decided to go back to software developing and advance my real world software skills. I
            joined Nashville Software School for this purpose and it has been a great decision for my career.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
