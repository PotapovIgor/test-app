import React, { Component } from 'react';
import Hobby from './Hobby';
import TripAndOverseas from './TripAndOverseas';
import SocActiv from './SocActiv';
import { browserHistory } from 'react-router';

class Page3 extends Component{

    constructor(props) {
        super(props);
        //this.state = this.props.dataForStep3;
        this.state = {
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
        };
        console.log(this.state);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.addForm = this.addForm.bind(this);
        this.removeForm = this.removeForm.bind(this);

        this.handleChangeT = this.handleChangeT.bind(this);
        this.addFormT = this.addFormT.bind(this);
        this.removeFormT = this.removeFormT.bind(this);

        this.handleChangeS = this.handleChangeS.bind(this);
        this.addFormS = this.addFormS.bind(this);
        this.removeFormS = this.removeFormS.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + JSON.stringify(this.state));
        const path = '/page4';
        console.log(path);
        browserHistory.push(path);
        event.preventDefault();
    }

    handleChange(name, value, id) {
        console.log(name, value, id,);
        const hobbies = this.state.hobbies;
        hobbies[id][name] = value;

        this.setState({
            hobbies:hobbies
        });
    }

    addForm(event){
        console.log('add form');
        this.setState(state => {
            state.hobbies.push({typeOfHobby:"", description:""});
            return {hobbies: state.hobbies};
        });
    }

    removeForm(event){
        console.log('remove form');
        var formIndex = parseInt(event.target.value, 10);
        console.log('remove form: %d', formIndex, this.state.hobbies[formIndex]);
        this.setState(state => {
            state.hobbies.splice(formIndex, 1);
            return {hobbies: state.hobbies};
        });
    }

    handleChangeT(name, value, id) {
        console.log(name, value, id,);
        const trips = this.state.trips;
        trips[id][name] = value;

        this.setState({
            trips:trips
        });
    }

    addFormT(event){
        console.log('add form');
        this.setState(state => {
            state.trips.push({ cityName:"", year:"", duration:"", typeActivity:""});
            return {trips: state.trips};
        });
    }

    removeFormT(event){
        console.log('remove form');
        var formIndex = parseInt(event.target.value, 10);
        console.log('remove form: %d', formIndex, this.state.trips[formIndex]);
        this.setState(state => {
            state.trips.splice(formIndex, 1);
            return {trips: state.trips};
        });
    }

    handleChangeS(name, value, id) {
        console.log(name, value, id,);
        const socActivs = this.state.socActivs;
        socActivs[id][name] = value;

        this.setState({
            socActivs:socActivs
        });
    }

    addFormS(event){
        console.log('add form');
        this.setState(state => {
            state.socActivs.push({ typeOfActivity:"", duration:"", description:"", responsibilities:""});
            return {socActivs: state.socActivs};
        });
    }

    removeFormS(event){
        console.log('remove form');
        var formIndex = parseInt(event.target.value, 10);
        console.log('remove form: %d', formIndex, this.state.socActivs[formIndex]);
        this.setState(state => {
            state.socActivs.splice(formIndex, 1);
            return {socActivs: state.socActivs};
        });
    }
    
    render() {
        return(
            <div className="page3">
                <h3>Hobbies</h3>
                <div>{ this.state.hobbies.map(
                    (element, formIndex) => {
                        element.id=formIndex;
                        return <div key={formIndex}>
                            <h4>Tab #{element.id}</h4>
                            <Hobby
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

                <h3>Trip and Experience Overseas</h3>
                <div>{ this.state.trips.map(
                    (element, formIndex) => {
                        element.id=formIndex;
                        return <div key={formIndex}>
                            <h4>Tab #{element.id}</h4>
                            <TripAndOverseas
                                name={formIndex}
                                onChange={this.handleChangeT}
                                elementData={element}/>
                            <button type="button"
                                    className="btn btn-danger"
                                    value={formIndex}
                                    onClick={this.removeFormT}
                            >Remove</button>
                        </div>;
                    }
                )}
                    <br/>
                    <input type="button" className="btn" onClick={this.addFormT} value="Add form" />
                </div>

                <h3>Cultural, Sports, Social activities</h3>
                <div>{ this.state.socActivs.map(
                    (element, formIndex) => {
                        element.id=formIndex;
                        return <div key={formIndex}>
                            <h4>Tab #{element.id}</h4>
                            <SocActiv
                                name={formIndex}
                                onChange={this.handleChangeS}
                                elementData={element}/>
                            <button type="button"
                                    className="btn btn-danger"
                                    value={formIndex}
                                    onClick={this.removeFormS}
                            >Remove</button>
                        </div>;
                    }
                )}
                </div>

                <br/>
                <input type="button" className="btn" onClick={this.addFormS} value="Add form" />
                <br/><br/>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}
export default Page3;