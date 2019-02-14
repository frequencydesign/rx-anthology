import React, { Component } from 'react';

import './SuperBowlLanding.css';
import GameHeader from '../GameHeader/GameHeader.js'
import GameScore from '../GameScore/GameScore.js'
import GameArticle from '../GameArticle/GameArticle.js'

import gameContent from '../data/content.json'

export const GameContext = React.createContext();

/*class Provider extends Component {

    render() {
        return (
            <GameContext.Provider value={{state: this.state}}>
                {this.props.children}
            </GameContext.Provider>
        )
    }
}*/

class SuperBowlLanding extends Component {
    state = {
        gameContent
    }
/*
    constructor(props) {
        super(props);

        this.state = { // I could use this.state.year in the render instead if I add this.state object
            year: props.match.params.year,
        };
    }
*/

    // componentDidMount() {
    //     fetch(``)
    // }

    render() {
        return (
            <GameContext.Provider value={{state: this.state}}>
                <GameHeader superBowlYear={this.props.match.params.year}/>
                <GameScore superBowlYear={this.props.match.params.year}/>
                <GameArticle articleType={'firstHand'}/>
                <GameArticle articleType={'storyOfTheGame'}/>
            </GameContext.Provider>
        );
    }
}

export default SuperBowlLanding;