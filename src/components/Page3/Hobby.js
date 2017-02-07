import React, { Component } from 'react';

 class Hobbies extends Component {
     constructor(props) {
         super(props);
         this.state = {
             typeOfHobby: '',
             description: ''
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
            <div className="hobbies">

                <form className="form-group" onSubmit={this.handleSubmit}>
                    <h3>Hobbies</h3>
                    <div>
                        <label htmlFor="typeOfHobby">Type of Hobby</label>
                        <select name="typeOfHobby" className="form-control" value={this.state.typeOfHobby} onChange={this.handleChange}>
                            <option value="travel">Travel</option>
                            <option value="music">Music</option>
                            <option value="sport">Sport</option>
                            <option value="reading">Reading</option>
                            <option value="cinema">Cinema</option>
                            <option value="arts">Arts</option>
                            <option value="nightlife">Nightlife</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" className="form-control" type="text" value={this.state.description} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Hobbies;