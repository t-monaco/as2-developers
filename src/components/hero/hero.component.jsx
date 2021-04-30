import React from 'react';
import './hero.styles.scss';

const Hero = ({ imgUrl }) => {
    return (
        <div className='hero'>
            <img className='hero-image' src={imgUrl} alt='' />
        </div>
    );
};

export default Hero;
