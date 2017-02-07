import React, { Component } from 'react';

class CultSportSoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeOfActivity: '',
            duration: '',
            description: '',
            responsibilities: ''
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
            <div className="CultSportSocActivities">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <h3>Cultural, Sports, Social activities</h3>
                    <div>
                        <label htmlFor="typeOfActivity">Type of activity</label>
                        <input name="typeOfActivity" className="form-control" type="text" value={this.state.typeOfActivity} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="duration">Duration in years</label>
                        <input name="duration" className="form-control" type="number" value={this.state.duration} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description of activity</label>
                        <textarea name="description" className="form-control" type="text" value={this.state.description} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="responsibilities">Responsibilities/Achievements</label>
                        <input name="responsibilities" className="form-control" type="text" value={this.state.responsibilities} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
 export default CultSportSoc;