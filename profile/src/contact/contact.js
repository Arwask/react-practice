import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    };
  }
  handleSubmit = function(e) {
    e.preventDefault();
  }.bind(this);

  render() {
    return (
      <div class="formDiv">
        <h1 class="contactTitle">Conatct Me</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
          </div>
          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label for="phoneNumber">Password</label>
            <input type="number" className="form-control" id="phoneNumber" placeholder="1231231234" required />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
