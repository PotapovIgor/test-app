import React, { Component } from 'react';

class MyLink extends Component{
    render(){
        return(
            <div>
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
export default MyLink;