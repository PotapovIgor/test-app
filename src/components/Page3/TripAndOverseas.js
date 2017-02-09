import React, { Component } from 'react';

class TripAndOverseas extends Component{

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
        return(
            <div>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="cityName">City name
                        <input name="cityName" className="form-control" type="text" value={this.props.elementData.cityName} onChange={this.handleChange}/>
                        </label>
                        <label htmlFor="year">Year
                            <input name="year" className="form-control" type="text" value={this.props.elementData.year} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="duration">Duration in week
                        <input name="duration" className="form-control" type="number" value={this.props.elementData.duration} onChange={this.handleChange}/>
                        </label>
                        <label htmlFor="typeActivity">Type of activity
                            <input name="typeActivity" className="form-control" type="text" value={this.props.elementData.typeActivity} onChange={this.handleChange}/>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}
export default TripAndOverseas;