import React, { Component } from 'react';
import './Landing.css';

import HomeHeader from '../HomeHeader/HomeHeader.js'
import Matches from '../Matches/Matches.js'

class App extends Component {
    render() {
        return (
            <div id="anthology-landing">
                <HomeHeader />
                <Matches />
            </div>
        );
    }
}

export default App;
