import React, {Component} from 'react';
import './GameArticle.css';

import { GameContext } from '../SuperBowlLanding/SuperBowlLanding.js';
import superBowls from "../data/superBowls";
import Match from "../Match/Match";
// import gameContent from "../data/content";

class GameArticle extends Component {

    articleCloseToggle = () => {

    }

    articleReadMore = () => {

    }

    render() {
        return (
            <GameContext.Consumer>
                {(context) => this.props.articleType == 'firstHand' ? (
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
                            {context.state.gameContent.content.firstHand.text.map( (paragraph, i) =>
                                <p className="article-content" key={i}>
                                    <b className="bolded-first-text">{paragraph.intro}</b>
                                    {paragraph.text}
                                </p>
                            )}
                        </div>
                        <button className="read-more" id="readMoreButton"><span
                            className="read-more-text">read more...</span></button>
                    </div>
                ) : (
                    <div className="article" tabIndex="-1" title={`${context.state.gameContent.content.storyOfTheGame.title}`}>
                        <div className="article-header">
                            <button className="collapse-text-button collapse" ng-click="showHide()">X</button>
                            <button className="collapse-text-button-absolute collapse">X</button>
                            <h2>
                                {context.state.gameContent.content.storyOfTheGame.title}
                                <div className="gold-bottom-border"></div>
                            </h2>
                        </div>
                        <game-article-content text="text" show-hide="showHide()"></game-article-content>
                        <div>
                            {context.state.gameContent.content.storyOfTheGame.text.map( (paragraph, i) =>
                                <p className="article-content" key={i}>
                                    {paragraph.text}
                                </p>
                            )}
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