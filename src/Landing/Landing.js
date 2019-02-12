import React, { Component } from 'react';
import './Landing.css';

import HomeHeader from '../HomeHeader/HomeHeader.js'
import Matches from '../Matches/Matches.js'

class Landing extends Component {
    render() {
        return (
            <div id="landing-container">
                <div id="anthology-landing">
                    <HomeHeader />
                    <Matches />
                </div>
            </div>
        );
    }
}

export default Landing;
