import React, { Component } from 'react';
import Certificate from './Certificate';
import Experience from './Experience';

//Experience data={ this.state.allFormsStuff }

class Page1 extends Component {
	constructor(props) {
	    super(props);
	    this.state = this.props.dataForStep1;
	    console.log(this.state);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.addForm = this.addForm.bind(this);
		this.removeForm = this.removeForm.bind(this);
  	}

	// handleChange(name, value, id) {
	// 	console.log(name, value, id,);
	// 	const certificates = this.state.certificates;
	// 	certificates[id][name] = value;
    //
	// 	this.setState({
	// 		certificates:certificates
	// 	});
	// }
	handleChange(name, value, id) {
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

	// addForm(event){
	// 	console.log('add form');
	// 	this.setState(state => {
	// 		state.certificates.push({year:"",duration:"",courseName: "", schoolName: "", location:""});
	// 		return {certificates: state.certificates};
	// 	});
	//	
	// }
	addForm(event){
		console.log('add form');
		this.setState(state => {
			state.experience.push({year:"",duration:"",jobTitle:"", companyName:"", location:"", contractType:"", majorTask:""});
			return {experience: state.experience};
		});

	}
	// removeForm(event){
	// 	console.log('remove form');
	// 	var formIndex = parseInt(event.target.value, 10);
	// 	console.log('remove form: %d', formIndex, this.state.certificates[formIndex]);
	// 	this.setState(state => {
	// 		state.certificates.splice(formIndex, 1);
	// 		return {certificates: state.certificates};
	// 	});
	// }
	removeForm(event){
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
				<div>{ this.state.certificates.map((element, formIndex) => {
						element.id=formIndex;
						return <div key={formIndex}>
						<Certificate name={formIndex}
						onChange={this.handleChange}
							elementData={element}
							/>
							<button type="button" className="btn btn-danger" value={formIndex} onClick={this.removeForm}>Remove</button>
							</div>;
						}) 
					}
					<br/>
					<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
					<input type="button" className="btn" onClick={this.addForm} value="Add form" />
				</div>
				
				<div>
					{ this.state.experience.map((element, formIndex) => {
						element.id=formIndex;
						return <div key={formIndex}>
							<Experience name={formIndex}
										onChange={this.handleChange}
										elementData={element}
							/>
							<button type="button" className="btn btn-danger" value={formIndex} onClick={this.removeForm}>Remove</button>
						</div>;
					})
					}
					<br/>
					<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
					<input type="button" className="btn" onClick={this.addForm} value="Add form" />
				</div>
			</div>
		);
	}
}

export default Page1;