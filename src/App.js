import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Page4 from './components/Page4/Page4';


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
    step3:{
        hobbies:[{ 
            typeOfHobby:"",
            description:""
        }],
        trips:[{
            cityName:"",
            year:"",
            duration:"",
            typeActivity:""
        }],
        socActivs:[{
            typeOfActivity:"",
            duration:"",
            description:"",
            responsibilities:""
        }]
    },
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
            <Page3 dataForStep3={this.state.step3} />
            <Page4 />
        </div>
        );
    }
}

export default App;
