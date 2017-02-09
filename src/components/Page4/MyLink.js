import React, { Component } from 'react';

class MyLink extends Component{

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
    
    render(){
        return(
            <div>
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <h3>My Links</h3>
                        <label>Service :
                        <select name="service" className="form-control" >
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Viadeo">Viadeo</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                        </select>
                        </label>
                        <label>Url :
                        <input name="url" className="form-control" type="text"/>
                        </label>
                    </form>
            </div>
        );
    }
}
export default MyLink;