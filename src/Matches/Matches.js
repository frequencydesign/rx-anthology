import React from 'react';
import './Matches.css';

import superBowls from '../data/superBowls';
import Match from '../Match/Match.js';

const Matches = () => {

    return (
        <div className="matches">
            <h3>All The Matches</h3>
            {superBowls.map( (game, i) =>
                <Match key={i}
                       year={game.year}
                       awayTeam={game.teams[0].abbr}
                       romanNumeral={game.romanNumeral}
                       homeTeam={game.teams[1].abbr}
                />
            )}
        </div>
    )
}

export default Matches