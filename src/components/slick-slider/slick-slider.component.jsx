import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slick-slider.styles.scss';

import slideImg01 from './../../assets/slider/slide_01.jpg';
import slideImg02 from './../../assets/slider/slide_02.jpg';
import slideImg03 from './../../assets/slider/slide_03.jpg';
import slideImg04 from './../../assets/slider/slide_04.jpg';
import slideImg05 from './../../assets/slider/slide_05.jpg';
import slideImg06 from './../../assets/slider/slide_06.jpg';
import slideImg07 from './../../assets/slider/slide_07.jpg';
import slideImg08 from './../../assets/slider/slide_08.jpg';
import slideImg09 from './../../assets/slider/slide_09.jpg';

const SlickSlider = ({ images, settings }) => {
    if (!images) {
        images = [
            slideImg01,
            slideImg02,
            slideImg03,
            slideImg04,
            slideImg05,
            slideImg06,
            slideImg07,
            slideImg08,
            slideImg09,
        ];
    }

    return (
        <div className='slider'>
            <Slider {...settings}>
                {images.map((image, key) => (
                    <div className='slider-slide' key={key}>
                        <img src={image} alt='' />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlickSlider;
