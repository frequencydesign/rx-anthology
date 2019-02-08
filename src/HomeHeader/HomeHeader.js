import React from 'react';
// import a homepage logo (current nfl yeah?)
// import logo from './logo.svg';
import './HomeHeader.css';

// Need header test
// need logo
// need action text (Choose A Super Bowl)
// need down arrow


const HomeHeader = () => {

    return (
        <>
            <h2 className="superbowl-title">Super Bowl Anthology</h2>
            <img className="superbowl-50" alt="Super Bowl 50"
                 src="http://nflcdns.nfl.com/static/content/public/static/img/anthology/sb50-logo.png" />
            <div className="choose-bowl">CHOOSE A SUPER BOWL</div>
            <div className="release-arrow-container">
                <div className="release-arrow"></div>
            </div>
        </>
    )

}

export default HomeHeader