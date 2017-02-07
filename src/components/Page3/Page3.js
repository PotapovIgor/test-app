import React, { Component } from 'react';
import Hobbies from './Hobby';
import TripAndOverseas from './TripAndOverseas';
import CultSportSoc from './CultSportSoc';


class Page3 extends Component {
    render() {
        return (
            <div>
                <Hobbies />
                <TripAndOverseas />
                <CultSportSoc />
            </div>
        )
    }
}

export default Page3;