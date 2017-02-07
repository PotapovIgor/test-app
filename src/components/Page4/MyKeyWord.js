import React, { Component } from 'react';

class MyKeyWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myKeyWords: ''
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
            <div className="myKeyWords">

                <form className="form-group" onSubmit={this.handleSubmit}>
                    <h3>My Key Words</h3>
                    <select name="myKeyWords" className="form-control" value={this.state.myKeyWords} onChange={this.handleChange}>
                        <option value="listening">listening</option>
                        <option value="perseverant">perseverant</option>
                        <option value="optimistic">optimistic</option>
                    </select>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default MyKeyWords;