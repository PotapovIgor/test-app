import React, { Component } from 'react';

class MyKeyWord extends Component{
    render(){
        return(
            <div>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <h3>My Key Words</h3>
                    <select name="myKeyWords" className="form-control">
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
export default MyKeyWord;