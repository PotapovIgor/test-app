import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1/Page1';

let allDataState = {
    step1:{
        certificates:[{
            id:"",
            year:"",
            duration: "",
            courseName: "",
            schoolName: "",
            location: ""
        }],
        experience: [{
            id:"",
            year:"",
            duration:"",
            jobTitle:"",
            companyName:"",
            location:"",
            contractType:"",
            majorTask:""
        }] }
};

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
        <Page1 dataForStep1={this.state.step1} />
      </div>
    );
  }
}

export default App;
