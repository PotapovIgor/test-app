import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Certificate from './Certificate';
// import App from '../../App.js';

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

	handleChange(name, value, id) {
		console.log(name, value, id,);
		//var newProp = {[name]:value};
		const certificates = this.state.certificates;
		certificates[id][name] = value;


		this.setState({certificates:certificates});
	}

	handleSubmit(event) {
	    alert('A name was submitted: ' + JSON.stringify(this.state));
	    event.preventDefault();
	}

	addForm(event){
		console.log('add form');
		//this.state.certificates.push({year:"",duration:"",courseName: "", schoolName: "", location:""});
		// ReactDOM.render(
  		// 	<App />,
  		// 	document.getElementById('root')
		// );
		this.setState(state => {
			state.certificates.push({year:"",duration:"",courseName: "", schoolName: "", location:""});
			return {certificates: state.certificates};
		});
		
	}
	removeForm(event){
		console.log('remove form');
		var formIndex = parseInt(event.target.value, 10);
		console.log('remove task: %d', formIndex, this.state.certificates[formIndex]);
		this.setState(state => {
			state.certificates.splice(formIndex, 1);
			return {certificates: state.certificates};
		});
	}

	// state = initialState
    render() {
    	return (
			<div className='page1'>
				{ this.state.certificates.map((element, formIndex) => {
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
				
				<form className='form-group'>
						<h3>Professional Experience</h3>
						<div>
							<label>
							Year of beggining :
									<input type="text" className='form-control' />
							</label>
						</div>
						<div>
							<label>
							Duration :
									<input type="text" className='form-control' />
							</label>
						</div>
						<div>
							<label>
							Job title :
									<input type="text" className='form-control' />
							</label>
						</div>
						<div>
							<label>
							Company name :
									<input type="text" className='form-control'/>
							</label>
						</div>
						<div>
							<label>
							Location :
									<input type="text" className='form-control'/>
							</label>
						</div>
						<div>
							<label>
							Contract Type :
									<input type="text" className='form-control'/>
							</label>
						</div>
						<div>
							<label>
							Major task :
									<input type="text" className='form-control'/>
							</label>
						</div>
						<button type="submit" className="btn btn-primary" >Submit</button>
						<button  className="btn btn-danger">Clear Values</button>
						<button  className="btn"> Add form </button>
				</form>
				</div>
		);
	}
}

export default Page1;