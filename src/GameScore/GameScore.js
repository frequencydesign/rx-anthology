import React, { useContext } from 'react';

import './GameScore.css';

import { GameContext } from '../SuperBowlLanding/SuperBowlLanding.js';
// import gameContent from "../data/content";

const GameScore = () => {

    const gameContent = useContext(GameContext);

    return (
        <div className="game-score-container">
            <div className="game-score-away">
                <div className="game-score-team">{gameContent.state.gameContent.teamsFullName.team1}</div>
                <div className="game-score">{gameContent.state.gameContent.content.scores.team1Final}</div>
            </div>
            <span className="game-score-vs"> VS</span>
            <div className="game-score-home">
                <div className="game-score-team">{gameContent.state.gameContent.teamsFullName.team2}</div>
                <div className="game-score">{gameContent.state.gameContent.content.scores.team2Final}</div>
            </div>
        </div>
    );
};

export default GameScore;