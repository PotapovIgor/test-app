import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';

let allDataState = {
    step1:{ certificates:[{
        id:0,
        year:1992,
        duration: 3,
        courseName: "",
        schoolName: "",
        location: ""}], experience: [] }
}

class App extends Component {

    constructor(props) {
      super(props);
      this.state = allDataState;

      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Page1 dataForStep1={this.state.step1} />
      </div>
    );
  }
}

export default App;
