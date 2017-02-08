import React, { Component } from 'react';
import MyKeyWord from './MyKeyWord';
import MyLink from './MyLink';

class Page4 extends Component{
    render(){
        return(
            <div>
                <h1>Page 4</h1>
                <MyKeyWord/>
                <MyLink/>
            </div>
        );
    }
}
export default Page4;