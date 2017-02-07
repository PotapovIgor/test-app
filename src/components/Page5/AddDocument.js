import React, { Component } from 'react';

class AddDocument extends Component {
    render() {
        return (
            <div className="addDocument">
                <h3>Add a document</h3>
                //  file uploader
                <form className="form-group">
                    <div>
                        <label htmlFor="documentName">Document name</label>
                        <input name="documentName" className="form-control" type="text" />
                    </div>
                    <div>
                        <label htmlFor="documentDescr">Document description</label>
                        <input name="documentDescr" className="form-control" type="text" />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddDocument;