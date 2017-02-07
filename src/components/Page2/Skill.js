import React, { Component } from 'react';

 class Skills extends Component {
     constructor(props) {
         super(props);
         this.state = {
             typeOfSkill: '',
             description: '',
             levelInStars: ''
         };

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
         const target = event.target;
         const value = target.type === 'radio' ? target.checked : target.value;
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
            <div className="skills">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <h3>Skills & Licenses</h3>
                    <div>
                        <label htmlFor="typeOfSkill">Type of skill</label>
                        <input className="form-control" name="typeOfSkill" type="text" value={this.state.typeOfSkill} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea placeholder="Add description" className="form-control" name="description" type="text" value={this.state.description} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Level in stars</label>
                        <div className="form-check form-check-inline">
                            <label className="radio-inline">
                                <input
                                    type="radio"
                                    name="optradio"
                                    value="level1"
                                    checked={this.state.levelInStars==='level1'} onChange={this.handleChange}
                                   />1
                            </label>
                            <label className="radio-inline">
                                <input 
                                    type="radio" 
                                    name="optradio"
                                    value="level2"
                                    checked={this.state.levelInStars==='level2'} onChange={this.handleChange}
                                    />2
                            </label>
                            <label className="radio-inline">
                                <input 
                                    type="radio" 
                                    name="optradio"
                                    value="level3"
                                    />3
                            </label>
                            <label className="radio-inline">
                                <input 
                                    type="radio" 
                                    name="optradio"
                                    value="level4"
                                    />4
                            </label>
                            <label className="radio-inline">
                                <input 
                                    type="radio" 
                                    name="optradio"
                                    value="level5"
                                    />5
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );}
}
export default Skills;