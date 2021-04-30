import React from 'react';
import './project-content.styles.scss';
import SectionTitle from '../section-title/section-title.component';
import SlickSlider from '../slick-slider/slick-slider.component';

const ProjectContent = () => {
    const sliderSettings = {
        autoplay: true,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='project-content'>
            <SectionTitle type='h2' mainTitle='RESIDENCIAS' />
            <SlickSlider settings={sliderSettings}/>
        </div>
    );
};

export default ProjectContent;
