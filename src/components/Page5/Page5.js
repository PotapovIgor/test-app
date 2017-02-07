import React, { Component } from 'react';
import AddVideo from './AddVideo';
import AddPhoto from './AddPhoto';
import AddDocument from './AddDocument';

class Page5 extends Component {
    render() {
        return (
            <div>
                <AddVideo />
                <AddPhoto />
                <AddDocument />
            </div>
        )
    }
}

export default Page5;