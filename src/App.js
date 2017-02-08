import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';

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
        }] },
    step2:{ 
        skills:[{
            typeOfSkill:"",
            description:"",
            levelInStars:""
        }],
        drivingLicenses:[{
            vehicleType:"",
            category:""
        }]
    },
    step3:{ hobbies:[{}], trips:[{}], socActivs:[{}] },
    step4:{ myKeyWords:[{}], myLinks:[{}] }
};

class App extends Component {
    
    constructor(props) {
      super(props);
      this.state = allDataState;
    }
    render() {
        return (
        <div className="App">
            <Page1 dataForStep1={this.state.step1} />
            <Page2 dataForStep2={this.state.step2} />
        </div>
        );
    }
}

export default App;
