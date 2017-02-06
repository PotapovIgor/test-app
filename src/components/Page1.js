import React, { Component } from 'react';

var initialState = {
  	certificates:[1,2,3],
  	year:1992
};

class Page1 extends Component {
	constructor(props) {
	    super(props);
	    this.state = initialState;

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
				<form className='form-group' onSubmit={this.handleSubmit}>
					<h3>Additional Courses/Certeficates</h3>
						<div>
							<label>
							Year of beggining :
								<input type="text" className='form-control' value={this.state.year} onChange={this.handleChange}/>
							</label>
						</div>
						<div>
							<label>
							Duration of Education :
								<input type="text" className='form-control' />
							</label>
						</div>
						<div>
							<label>
							Course Name :
								<input type="text" className='form-control' />
							</label>
						</div>
						<div>
							<label>
							School Name :
								<input type="text" className='form-control' />
							</label>
						</div>
						<div>
							<label >
							Location :
								<input type="text" className='form-control' />
							</label>
						</div>
						<button type="submit" className="btn btn-primary" >Submit</button>
						<button  className="btn btn-danger">Clear Values</button>
						<button  className="btn">Add form</button>
					</form>

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