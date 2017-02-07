import React, { Component } from 'react';

class AddVideo extends Component {
    render() {
        return (
            <div className="addVideo">
                <h3>Add a video</h3>
                <form className="form-group">
                    <label htmlFor="videoUrl">Video URL</label>
                    <input name="videoUrl" className="form-control" type="text"/>
                    <label htmlFor="description">Description</label>
                    <input name="description" className="form-control" type="text"/>
                </form>
            </div>
        );
    }
}
export default AddVideo;