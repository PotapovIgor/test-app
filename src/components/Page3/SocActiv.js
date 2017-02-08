import React, { Component } from 'react';

class SocActiv extends Component{

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
                        <label>Type of activity
                        <input name="typeOfActivity" className="form-control" type="text" value={this.props.elementData.typeOfActivity} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Duration in years
                        <input name="duration" className="form-control" type="number" value={this.props.elementData.duration} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Description of activity
                        <textarea name="description" className="form-control" type="text" value={this.props.elementData.description} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Responsibilities/Achievements
                        <input name="responsibilities" className="form-control" type="text" value={this.props.elementData.responsibilities} onChange={this.handleChange}/>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}
export default SocActiv;