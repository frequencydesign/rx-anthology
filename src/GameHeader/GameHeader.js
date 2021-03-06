import React from 'react';
import { Link } from "react-router-dom";
import './GameHeader.css';

const GameHeader = ({superBowlYear}) => {
    return (
        <>
            <div id="header">
                <div className="header-content">
                    <Link to="/" className="header-home-link">
                        <div id="headerHomeButton">
                            <div className="header-home-button-icon"></div>
                            Super Bowl Anthology
                        </div>
                    </Link>
                </div>
            </div>
            <div className="game-hero-bg"
                 style={{backgroundImage: `url(//imagecomposer.nfl.com/?f=jpg&amp;w=1000&amp;l=http://i.nflcdn.com/static/content/public/static/img/anthology/superbowls/${superBowlYear}/headerBg.jpg)`}}>
                <div className="game-hero-overlay"></div>
                <div className="game-hero-date">
                    <div className="game-hero-year">{superBowlYear}</div>
                    <img className="game-hero-logo" alt="NFL Shield"
                         src={`http://imagecomposer.nfl.com/?f=png&amp;l=http://i.nflcdn.com/static/content/public/static/img/anthology/superbowls/${superBowlYear}/logo.png`} />
                </div>
            </div>
        </>
    );
};

export default GameHeader;