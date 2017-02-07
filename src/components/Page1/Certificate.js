import React, { Component } from 'react';

class Certificate extends Component {

	constructor(props) {
	    super(props);
	    this.state = this.props.elementData;
	    console.log(this.state);
	    this.handleChange = this.handleChange.bind(this);
  	}

  	handleChange(event) {
		console.log(event.target.value);
		this.props.onChange(event.target.name, event.target.value, this.props.elementData.id);
	}



	render() {
		return (
			<form className='form-group'>
					<h3>Additional Courses/Certeficates</h3>
						<div>
							<label>
							Year of begining :
								<input name="year" type="text" className='form-control' value={this.props.elementData.year} onChange={this.handleChange}/>
							</label>
						</div>
						<div>
							<label>
							Duration of Education :
								<input name="duration" type="text" className='form-control' value={this.props.elementData.duration} onChange={this.handleChange}/>
							</label>
						</div>
						<div>
							<label>
							Course Name :
								<input type="text" name="courseName" className='form-control' value={this.props.elementData.courseName} onChange={this.handleChange}/>
							</label>
						</div>
						<div>
							<label>
							School Name :
								<input type="text" name="schoolName" className='form-control' value={this.props.elementData.schoolName} onChange={this.handleChange}/>
							</label>
						</div>
						<div>
							<label >
							Location :
								<input type="text" name="location" className='form-control' value={this.props.elementData.location} onChange={this.handleChange}/>
							</label>
						</div>


					</form>
	  	);
	  }
	}

export default Certificate;