import React, { Component } from 'react';

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.elementData;
        console.log(this.state);
        this.handleChange = this.handleChange.bind(this);
    }

    // componentWillReceiveProps(props){
    //     this.state = {
    //         stuff: props.data
    //     }
    // }

    handleChange(event) {
        console.log(event.target.value);
        this.props.onChange(event.target.name, event.target.value, this.props.elementData.id);
    }
    
    render() {
        return (
            <form className='form-group'>
                
                <div>
                    <label>
                        Year of begining :
                        <input name="year" type="text" className='form-control' value={this.props.elementData.year} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Duration :
                        <input name="duration" type="text" className='form-control' value={this.props.elementData.duration} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Job title :
                        <input name="jobTitle" type="text" className='form-control' value={this.props.elementData.jobTitle} onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Company name :
                        <input name="companyName" type="text" className='form-control' value={this.props.elementData.companyName} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Location :
                        <input name="location" type="text" className='form-control' value={this.props.elementData.location} onChange={this.handleChange}/>
                    </label>
                    <label>Contract Type :
                        <select name="contractType" className="form-control" value={this.props.elementData.contractType} onChange={this.handleChange}>
                            <option value="CDD">CDD</option>
                            <option value="Stage">Stage</option>
                            <option value="CDI">CDI</option>
                            <option value="Alternance">Alternance</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Major task :
                        <input name="majorTask" type="text" className='form-control' value={this.props.elementData.majorTask} onChange={this.handleChange}/>
                    </label>
                </div>
            </form>
        );
    }
}
export default Experience;