import React, {Component} from 'react';
import './GameArticle.css';

import {GameContext} from '../SuperBowlLanding/SuperBowlLanding.js';
// import superBowls from "../data/superBowls";
// import Match from "../Match/Match";
// import gameContent from "../data/content";

class GameArticle extends Component {
    state = {
        articleClosed: true
    }

    articleCloseToggle = () => {
        this.setState({articleClosed: true});
    }

    articleReadMore = () => {
        // this.setState({articleClosed: !this.state.articleClosed});
        this.setState({articleClosed: false});
    }

    render() {
        return (
            <GameContext.Consumer>
                {(context) => (
                    <div className="article"
                         tabIndex="-1"
                         title={this.props.articleType === 'firstHand' ?
                             `${context.state.gameContent.content.firstHand.title}`
                             :
                             `${context.state.gameContent.content.storyOfTheGame.title}`
                         }
                    >
                        <div className="article-header">
                            <button className="collapse-text-button-absolute collapse"
                                    onClick={this.articleCloseToggle}
                                    style={this.state.articleClosed ? {display: 'none'} : null}
                            >
                                X
                            </button>
                            <h2>
                                {this.props.articleType === 'firstHand' ?
                                    `${context.state.gameContent.content.firstHand.title}`
                                    :
                                    `${context.state.gameContent.content.storyOfTheGame.title}`
                                }
                                <div className="gold-bottom-border"></div>
                            </h2>
                        </div>

                        {this.props.articleType === 'firstHand' ? (

                            <div>
                                {context.state.gameContent.content.firstHand.text.map((paragraph, i) =>
                                    <p className="article-content"
                                       style={this.state.articleClosed ? {display: 'none'} : null}
                                       key={i}
                                    >
                                        <b className="bolded-first-text">{paragraph.intro}</b>
                                        {paragraph.text}
                                    </p>
                                )}
                            </div>

                        ) : (

                            <div>
                                {context.state.gameContent.content.storyOfTheGame.text.map((paragraph, i) =>
                                    <p className="article-content"
                                       style={this.state.articleClosed ? {display: 'none'} : null}
                                       key={i}
                                    >
                                        {paragraph.text}
                                    </p>
                                )}
                            </div>

                        )
                        }

                        <button className="read-more"
                                id="readMoreButton"
                                onClick={this.articleReadMore}
                                style={this.state.articleClosed ? null : {display: 'none'}}
                        >
                            <span className="read-more-text">read more...</span>
                        </button>
                    </div>
                )}
            </GameContext.Consumer>
        );
    }
}

export default GameArticle;