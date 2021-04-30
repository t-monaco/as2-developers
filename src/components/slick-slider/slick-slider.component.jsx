import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slick-slider.styles.scss';

import slideImg01 from './../../assets/slider/slide_01.jpg';
import slideImg02 from './../../assets/slider/slide_02.jpg';
import slideImg03 from './../../assets/slider/slide_03.jpg';
import slideImg04 from './../../assets/slider/slide_04.jpg';

const SlickSlider = ({settings}) => {
    return (
        <div className='slider'>
            <Slider {...settings}>
                <div className='slider-slide'>
                    <img src={slideImg01} alt='' />
                </div>
                <div className='slider-slide'>
                    <img src={slideImg02} alt='' />
                </div>
                <div className='slider-slide'>
                    <img src={slideImg03} alt='' />
                </div>
                <div className='slider-slide'>
                    <img src={slideImg04} alt='' />
                </div>
            </Slider>
        </div>
    );
};

export default SlickSlider
