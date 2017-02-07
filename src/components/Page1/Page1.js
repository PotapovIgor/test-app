import React, { Component } from 'react';
import Certificate from './Certificate';
import Experience from './Experience';

//Experience data={ this.state.allFormsStuff }

class Page1 extends Component {
	constructor(props) {
	    super(props);
	    this.state = this.props.dataForStep1;
	    console.log(this.state);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	    this.handleChangeC = this.handleChangeC.bind(this);
	    this.addFormC = this.addFormC.bind(this);
		this.removeFormC = this.removeFormC.bind(this);

		this.handleChangeE = this.handleChangeE.bind(this);
		this.addFormE = this.addFormE.bind(this);
		this.removeFormE = this.removeFormE.bind(this);
  	}

	handleChangeC(name, value, id) {
		console.log(name, value, id,);
		const certificates = this.state.certificates;
		certificates[id][name] = value;
    
		this.setState({
			certificates:certificates
		});
	}
	
	handleChangeE(name, value, id) {
		console.log(name, value, id,);
		const experience = this.state.experience;
		experience[id][name] = value;

		this.setState({
			experience:experience
		});
	}

	handleSubmit(event) {
	    alert('A name was submitted: ' + JSON.stringify(this.state));
		// this.setState({ allFormsStuff: JSON.stringify(this.state )});
	    event.preventDefault();
	}

	addFormC(event){
		console.log('add form');
		this.setState(state => {
			state.certificates.push({year:"",duration:"",courseName: "", schoolName: "", location:""});
			return {certificates: state.certificates};
		});
		
	}
	
	addFormE(event){
		console.log('add form');
		this.setState(state => {
			state.experience.push({year:"",duration:"",jobTitle:"", companyName:"", location:"", contractType:"", majorTask:""});
			return {experience: state.experience};
		});

	}
	removeFormC(event){
		console.log('remove form');
		var formIndex = parseInt(event.target.value, 10);
		console.log('remove form: %d', formIndex, this.state.certificates[formIndex]);
		this.setState(state => {
			state.certificates.splice(formIndex, 1);
			return {certificates: state.certificates};
		});
	}
	
	removeFormE(event){
		console.log('remove form');
		var formIndex = parseInt(event.target.value, 10);
		console.log('remove form: %d', formIndex, this.state.experience[formIndex]);
		this.setState(state => {
			state.experience.splice(formIndex, 1);
			return {experience: state.experience};
		});
	}
	
    render() {
    	return (
			<div className='page1'>
				<h3>Additional Courses/Certificates</h3>
				<div>{ this.state.certificates.map((element, formIndex) => {
						element.id=formIndex;
						return <div key={formIndex++}>
							<h5>Tab #{formIndex}</h5>
						<Certificate name={formIndex}
						onChange={this.handleChangeC}
							elementData={element}
							/>
							<button type="button" className="btn btn-danger" value={formIndex} onClick={this.removeFormC}>Remove</button>
							</div>;
						}) 
					}
					<br/>
					
					<input type="button" className="btn" onClick={this.addFormC} value="Add form" />
				</div>
				
				<div>
					<h3>Professional Experience</h3>
					{ this.state.experience.map((element, formIndex) => {
						element.id=formIndex;
						return <div key={formIndex++}>
							<h5>Tab #{formIndex}</h5>
							<Experience name={formIndex}
										onChange={this.handleChangeE}
										elementData={element}
							/>
							<button type="button" className="btn btn-danger" value={formIndex} onClick={this.removeFormE}>Remove</button>
						</div>;
					})
					}
					<br/>
					<input type="button" className="btn" onClick={this.addFormE} value="Add form" />
					<br/><br/>
					<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
				</div>
			</div>
		);
	}
}

export default Page1;