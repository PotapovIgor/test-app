import React, { Component } from 'react';

class Skill extends Component{

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
        return (
            <div>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Type of skill :
                            <input className="form-control" name="typeOfSkill" type="text" value={this.props.elementData.typeOfSkill} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Description
                            <textarea placeholder="Add description" className="form-control" name="description" type="text" value={this.props.elementData.description} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Level in stars :
                            <div className="form-check form-check-inline">
                                <label className="radio-inline">
                                    <input
                                        type="radio"
                                        name="levelInStars"
                                        value="level1"
                                        checked={this.props.elementData.levelInStars} onChange={this.handleChange}
                                    />1
                                </label>
                                <label className="radio-inline">
                                    <input
                                        type="radio"
                                        name="levelInStars"
                                        value="level2"
                                        checked={this.props.elementData.levelInStars} onChange={this.handleChange}
                                    />2
                                </label>
                                <label className="radio-inline">
                                    <input
                                        type="radio"
                                        name="levelInStars"
                                        value="level3"
                                        checked={this.props.elementData.levelInStars} onChange={this.handleChange}
                                    />3
                                </label>
                                <label className="radio-inline">
                                    <input
                                        type="radio"
                                        name="levelInStars"
                                        value="level4"
                                    />4
                                </label>
                                <label className="radio-inline">
                                    <input
                                        type="radio"
                                        name="levelInStars"
                                        value="level5"
                                        checked={this.props.elementData.levelInStars} onChange={this.handleChange}
                                    />5
                                </label>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default Skill;
