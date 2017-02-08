import React, { Component } from 'react';

class Hobby extends Component{

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
                        <label>Type of Hobby :
                            <select name="typeOfHobby" className="form-control" value={this.props.elementData.typeOfHobby} onChange={this.handleChange}>
                                <option value="travel">Travel</option>
                                <option value="music">Music</option>
                                <option value="sport">Sport</option>
                                <option value="reading">Reading</option>
                                <option value="cinema">Cinema</option>
                                <option value="arts">Arts</option>
                                <option value="nightlife">Nightlife</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="description">Description :
                            <textarea name="description" className="form-control" type="text" value={this.props.elementData.description} onChange={this.handleChange}/>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}
export default Hobby;