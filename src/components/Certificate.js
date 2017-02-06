import React, { Component } from 'react';

class Certificate extends Component {

	constructor(props) {
	    super(props);
	    this.state = this.props.elementData;
	    console.log(this.state);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
		console.log(event.target.value);
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(event) {
	    alert('A name was submitted: ' + JSON.stringify(this.state));
	    event.preventDefault();
	}

	render() {
		return (
			<form className='form-group' onSubmit={this.handleSubmit}>
					<h3>Additional Courses/Certeficates</h3>
						<div>
							<label>
							Year of beggining :
								<input name="year" type="text" className='form-control' value={this.state.year} onChange={this.handleChange} />
							</label>
						</div>
						<div>
							<label>
							Duration of Education :
								<input name="duration" type="text" className='form-control' value={this.state.duration} onChange={this.handleChange}/>
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
	  	);
	  }
	}

export default Certificate;