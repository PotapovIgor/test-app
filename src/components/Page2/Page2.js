import React, { Component } from 'react';
import Skill from './Skill';
import DrivingLicense from './DrivingLicense';

class Page2 extends Component{

    constructor(props) {
        super(props);
        this.state = this.props.dataForStep2;
        console.log(this.state);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.addForm = this.addForm.bind(this);
        this.removeForm = this.removeForm.bind(this);

        this.handleChangeD = this.handleChangeD.bind(this);
        this.addFormD = this.addFormD.bind(this);
        this.removeFormD = this.removeFormD.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + JSON.stringify(this.state));
        // this.setState({ allFormsStuff: JSON.stringify(this.state )});
        event.preventDefault();
    }

    handleChange(name, value, id) {
        console.log(name, value, id,);
        const skills = this.state.skills;
        skills[id][name] = value;

        this.setState({
            skills:skills
        });
    }
    
    addForm(event){
        console.log('add form');
        this.setState(state => {
            state.skills.push({typeOfSkill:"", description:"", levelInStars: ""});
            return {skills: state.skills};
        });
    }

    removeForm(event){
        console.log('remove form');
        var formIndex = parseInt(event.target.value, 10);
        console.log('remove form: %d', formIndex, this.state.skills[formIndex]);
        this.setState(state => {
            state.skills.splice(formIndex, 1);
            return {skills: state.skills};
        });
    }

    handleChangeD(name, value, id) {
        console.log(name, value, id,);
        const drivingLicenses = this.state.drivingLicenses;
        drivingLicenses[id][name] = value;

        this.setState({
            drivingLicenses:drivingLicenses
        });
    }

    addFormD(event){
        console.log('add form');
        this.setState(state => {
            state.drivingLicenses.push({vehicleType:"", category:""});
            return {drivingLicenses: state.drivingLicenses};
        });
    }

    removeFormD(event){
        console.log('remove form');
        var formIndex = parseInt(event.target.value, 10);
        console.log('remove form: %d', formIndex, this.state.drivingLicenses[formIndex]);
        this.setState(state => {
            state.drivingLicenses.splice(formIndex, 1);
            return {drivingLicenses: state.drivingLicenses};
        });
    }

    
    render(){
        return(
            <div className="page2">
                <h3>Skills & Licenses</h3>
                <div>{ this.state.skills.map(
                    (element, formIndex) => {
                        element.id=formIndex;
                        return <div key={formIndex}>
                            <h4>Tab #{element.id}</h4>
                            <Skill
                                name={formIndex}
                                onChange={this.handleChange}
                                elementData={element}/>
                            <button type="button"
                                    className="btn btn-danger"
                                    value={formIndex}
                                    onClick={this.removeForm}
                            >Remove</button>
                        </div>;
                    }
                )}
                    <br/>

                    <input type="button" className="btn" onClick={this.addForm} value="Add form" />
                </div>
                <h3>Driving License</h3>
                <div>{ this.state.drivingLicenses.map(
                    (element, formIndex) => {
                        element.id=formIndex;
                        return <div key={formIndex}>
                            <h4>Tab #{element.id}</h4>
                            <DrivingLicense
                                name={formIndex}
                                onChange={this.handleChangeD}
                                elementData={element}/>
                            <button type="button"
                                    className="btn btn-danger"
                                    value={formIndex}
                                    onClick={this.removeFormD}
                            >Remove</button>
                        </div>;
                    }
                )}
                </div>
                
                <br/>
                <input type="button" className="btn" onClick={this.addFormD} value="Add form" />
                <br/><br/>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                
            </div>
        );
    }
}
export default Page2;