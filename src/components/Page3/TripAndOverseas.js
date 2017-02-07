import React, { Component } from 'react';

 class TripAndOverseas extends Component {
     constructor(props) {
         super(props);
         this.state = {
             cityName: '',
             year: '',
             duration: '',
             typeActivity: ''
             
             
         };

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
         const target = event.target;
         const value = target.value;
         const name = target.name;
         this.setState({
             [name]: value
         });
     }

     handleSubmit(event) {
         alert('A name was submitted: ' + JSON.stringify(this.state));
         event.preventDefault();
     }
    render() {
        return (
            <div className="tripAndExperienceOverseas">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <h3>Trip and experience overseas</h3>
                    <div>
                        <label htmlFor="cityName">City name</label>
                        <input name="cityName" className="form-control" type="text" value={this.state.cityName} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="year">Year</label>
                        <input name="year" className="form-control" type="text" value={this.state.year} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="duration">Duration in week</label>
                        <input name="duration" className="form-control" type="number" value={this.state.duration} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="typeActivity">Type of activity</label>
                        <input name="typeActivity" className="form-control" type="text" value={this.state.typeActivity} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div> 
        );
    }
}

export default TripAndOverseas;



