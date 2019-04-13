import React, { Component } from 'react';

import './SuperBowlLanding.css';
import GameHeader from '../GameHeader/GameHeader.js'
import GameScore from '../GameScore/GameScore.js'
import GameArticle from '../GameArticle/GameArticle.js'
import ImageCarousel from '../ImageCarousel/ImageCarousel.js'

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

/*        const bgImageStyles = {
            backgroundPosition: "center center",
            backgroundSize: "cover",
            bottom: 0,
            height: 500,
            left: 0,
            opacity: 0.2,
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: 0,
            backgroundImage: `url(https://static.nfl.com/static/content/public/static/img/anthology/superbowls/${this.props.match.params.year}/gameInfoBg.jpg)`
        }*/

        const bgImageStyles = {
            height: 500
        }

        return (
            <GameContext.Provider value={{state: this.state}}>
                <GameHeader superBowlYear={this.props.match.params.year}/>
                <GameScore superBowlYear={this.props.match.params.year}/>
                <GameArticle articleType={'firstHand'}/>
                <div style={{position: 'relative'}}>
                    <ImageCarousel />
                    <img src={`https://static.nfl.com/static/content/public/static/img/anthology/superbowls/${this.props.match.params.year}/gameInfoBg.jpg`}
                         style={bgImageStyles}
                         alt={`Game Info for ${this.props.match.params.year}`}
                    />
                </div>
                <GameArticle articleType={'storyOfTheGame'}/>
            </GameContext.Provider>
        );
    }
}

export default SuperBowlLanding;