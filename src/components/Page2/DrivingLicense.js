import React, { Component } from 'react';

class DrivingLicense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleType: '',
            category: ''
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
            <div className="drivingLicense">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <h3>Driving License</h3>
                    <div>
                        <label htmlFor="vehicleType">Vehicle type</label>
                        <select name="vehicleType" className="form-control" value={this.state.vehicleType} onChange={this.handleChange}>
                            <option value="car">Car</option>
                            <option value="van">Van</option>
                            <option value="motorcycle">Motorcycle</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <input name="category" className="form-control" type="text" value={this.state.category} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );}
}
export default DrivingLicense;