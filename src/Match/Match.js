import React from 'react';
import './Match.css';

const Match = ({key, year, awayTeam, romanNumeral, homeTeam}) => {
//            <a href={`/#/superbowl/${year}?year=${year}`} className="match-link">
    return (
        <div className="match-link-container">
                <div>
                    <div className="match-year">{year}</div>
                    <div>
                        <span className="match-city">{awayTeam}</span>
                        <span className="roman-numeral">{romanNumeral}</span>
                        <span className="match-city">{homeTeam}</span>
                    </div>
                </div>
        </div>
    )
}

export default Match