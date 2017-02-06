import React, { Component } from 'react';
import Certificate from './Certificate';

class Page1 extends Component {
	constructor(props) {
	    super(props);
	    this.state = this.props.dataForStep1;
	    console.log(this.state);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleChange(event) {
		console.log(event.target.value);
		this.setState({year: event.target.value});
	}

	handleSubmit(event) {
	    alert('A name was submitted: ' + JSON.stringify(this.state));
	    event.preventDefault();
	}

	// state = initialState
    render() {
    	return (
			<div className='page1'>
				{ this.state.certificates.map((element, i) => {
					return <Certificate
						key={i} 
						elementData={element}
						/>;
					}) 
				}
				
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
				}
				</div>
		);
	}
}

export default Page1;