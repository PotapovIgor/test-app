import React, { Component } from 'react';

class MyKeyWord extends Component{

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
                    <label>
                    <select name="myKeyWords" className="form-control">
                        <option value="listening">listening</option>
                        <option value="perseverant">perseverant</option>
                        <option value="optimistic">optimistic</option>
                    </select>
                    </label>
                </form>
            </div>
        );
    }
}
export default MyKeyWord;