import React from 'react';

import './SuperBowlLanding.css';
import GameHeader from '../GameHeader/GameHeader.js'
import GameScore from '../GameScore/GameScore.js'

const SuperBowlLanding = ({match}) => {
    return (
        <>
            <GameHeader superBowlYear={match.params.year}/>
            <GameScore superBowlYear={match.params.year}/>
        </>
    );
};

export default SuperBowlLanding;