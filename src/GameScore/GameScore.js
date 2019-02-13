import React from 'react';

import './GameScore.css';


const GameScore = () => {
    return (
        <div className="game-score-container">
            <div className="game-score-away">
                <div className="game-score-team">Green Bay Packers</div>
                <div className="game-score">33</div>
            </div>
            <span className="game-score-vs"> VS</span>
            <div className="game-score-home">
                <div className="game-score-team">Oakland Raiders</div>
                <div className="game-score">14</div>
            </div>
        </div>
    );
};

export default GameScore;