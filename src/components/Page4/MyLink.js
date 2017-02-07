import React, { Component } from 'react';

class MyLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: 'LinkedIn',
            url: ''
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
            <div className="myLinks">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <h3>My Links</h3>
                    <label htmlFor="service">Service</label>
                    <select name="service" className="form-control" value={this.state.service} onChange={this.handleChange}>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Viadeo">Viadeo</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Twitter">Twitter</option>
                    </select>
                    <label htmlFor="url">Url</label>
                    <input name="url" className="form-control" type="text" value={this.state.url} onChange={this.handleChange}/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default MyLinks;