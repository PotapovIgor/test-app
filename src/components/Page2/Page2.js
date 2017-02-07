import React, { Component } from 'react';
import Skills from './Skill';
import DrivingLicense from './DrivingLicense';

export default class Page2 extends Component {
    render() {
        return (
            <div>
                <Skills />
                <DrivingLicense />
            </div>
        )
    }
}