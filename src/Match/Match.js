import React from 'react';
import './Match.css';

const Match = () => {

    return (
        <div className="match-link-container">
            <a href="/#/superbowl/1967?year=1967" className="match-link">
                <div>
                    <div className="match-year">1967</div>
                    <div>
                        <span className="match-city">KC</span>
                        <span className="roman-numeral">I</span>
                        <span className="match-city">GB</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Match