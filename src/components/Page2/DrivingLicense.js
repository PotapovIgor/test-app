import React, { Component } from 'react';

class DrivingLicense extends Component {

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
            <div className="drivingLicense">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="vehicleType">Vehicle type :
                        <select name="vehicleType" className="form-control" value={this.props.elementData.vehicleType} onChange={this.handleChange}>
                            <option value="car">Car</option>
                            <option value="van">Van</option>
                            <option value="motorcycle">Motorcycle</option>
                        </select>
                        </label>
                        <label htmlFor="category">Category
                            <input name="category" className="form-control" type="text" value={this.props.elementData.category} onChange={this.handleChange}/>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}
export default DrivingLicense;