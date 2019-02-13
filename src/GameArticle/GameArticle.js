import React, {Component} from 'react';
import './GameArticle.css';

import { GameContext } from '../SuperBowlLanding/SuperBowlLanding.js';
// import gameContent from "../data/content";

class GameArticle extends Component {
    render() {
        return (
            <GameContext.Consumer>
                {(context) => (
                    <div className="article" tabIndex="-1" title={`${context.state.gameContent.content.firstHand.title}`}>
                        <div className="article-header">
                            <button className="collapse-text-button collapse" ng-click="showHide()">X</button>
                            <button className="collapse-text-button-absolute collapse">X</button>
                            <h2>
                                {context.state.gameContent.content.firstHand.title}
                                <div className="gold-bottom-border"></div>
                            </h2>
                        </div>
                        <game-article-content text="text" show-hide="showHide()"></game-article-content>
                        <div>
                            <p className="article-content ng-binding">
                                <b className="bolded-first-text"></b>
                                Dowler, a veteran wide receiver for the Green Bay Packers, caught a 62-yard touchdown pass from
                                Bart Starr to help the Packers win their second consecutive Super Bowl.
                            </p>
                            <p className="article-content">
                                <b className="bolded-first-text" ng-show="false"></b>
                                Dowler, a veteran wide receiver for the Green Bay Packers, caught a 62-yard touchdown pass from
                                Bart Starr to help the Packers win their second consecutive Super Bowl.
                            </p>
                            <p className="article-content">
                                <b className="bolded-first-text">The primary receiver (for us) was Carroll Dale.</b>
                                I was the weak-side end. Quarterback Bart Starr read the coverage and knew I was going to be
                                singled up. Bart didn’t make many mistakes on reading coverage. It opened up the middle of the field.
                                Kent McCloughan was up on me in a bump and run. Normally he was a card-carrying sprinter and I
                                wasn’t, but I just went on by him on the post. They might have had break down in coverage. I’m not sure
                                the safety wasn’t supposed to be coming over to help out on me.
                            </p>
                        </div>
                        <button className="read-more" id="readMoreButton"><span
                            className="read-more-text">read more...</span></button>
                    </div>
                )}
            </GameContext.Consumer>
        );
    }
}

export default GameArticle;