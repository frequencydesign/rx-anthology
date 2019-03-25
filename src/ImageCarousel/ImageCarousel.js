import React, {Component} from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css';

import {GameContext} from '../SuperBowlLanding/SuperBowlLanding.js';

class ImageCarousel extends Component {
    render() {
        const settings = {
            dots: false,
        };

        return (
            <GameContext.Consumer>
                {(context) => (
                    <div>
                        <Slider {...settings}>
                            {context.state.gameContent.content.imageGallery1.map( (asset, i) =>
                                <div key={i}>
                                    <img src={asset.imageUrl} />
                                    <div>{asset.text}</div><div>{i}/{context.state.gameContent.content.imageGallery1.length}</div>
                                </div>
                            )}
                        </Slider>
                    </div>
                )}
            </GameContext.Consumer>
        );
    }
}

export default ImageCarousel;
