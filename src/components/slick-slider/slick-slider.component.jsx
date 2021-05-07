import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slick-slider.styles.scss';

import slideImg01 from './../../assets/slider/slide_01.jpg';
import slideImg02 from './../../assets/slider/slide_02.jpg';
import slideImg03 from './../../assets/slider/slide_03.jpg';
import slideImg04 from './../../assets/slider/slide_04.jpg';

const SlickSlider = ({ images, settings }) => {
    if (!images) {
        images = [slideImg01, slideImg02, slideImg03, slideImg04];
    }

    return (
        <div className='slider'>
            <Slider {...settings}>
                {images.map((item, key) => (
                    <div className='slider-slide' key={key}>
                        <img src={item} alt='' />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlickSlider;
