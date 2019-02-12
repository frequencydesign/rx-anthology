import React from 'react';
import { Link } from "react-router-dom";
import './SuperBowlLanding.css';
import SuperBowlHeader from '../SuperBowlHeader/SuperBowlHeader.js'

const SuperBowlLanding = ({match}) => {
    return (
        <>
            <SuperBowlHeader superBowlYear={match.params.year}/>
        </>
    );
};

export default SuperBowlLanding;