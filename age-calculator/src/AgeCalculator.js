// src/AgeCalculator.js
import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: '',
      age: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ birthDate: e.target.value });
  };

  calculateAge = () => {
    const { birthDate } = this.state;
    if (birthDate) {
      const dob = new Date(birthDate);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      this.setState({ age });
    }
  };

  render() {
    const { birthDate, age } = this.state;

    return (
      <div className="age-calculator">
        <h1>Age Calculator</h1>
        <p>Enter your date of birth</p>
        <input
          type="text"
          placeholder="DD-MM-YYYY"
          value={birthDate}
          onChange={this.handleInputChange}
        />
        <button onClick={this.calculateAge}>Calculate Age</button>
        {age && <p>You are {age} years old</p>}
      </div>
    );
  }
}

export default AgeCalculator;
