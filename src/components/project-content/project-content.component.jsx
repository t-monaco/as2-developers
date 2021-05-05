import React from 'react';
import './project-content.styles.scss';
import SectionTitle from '../section-title/section-title.component';
import SlickSlider from '../slick-slider/slick-slider.component';

const ProjectContent = ({title}) => {
    const sliderSettings = {
        autoplay: true,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    return (
        <div className='project-content'>
            <SectionTitle type='h2' mainTitle={title} />
            <SlickSlider settings={sliderSettings} />
            <p className='description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
                consequatur totam? Neque est asperiores vero, nulla similique
                nostrum non maxime. Labore consequuntur nobis sit molestiae
                consectetur totam quo aperiam dolorum.
            </p>
            <div className="divider"></div>
        </div>
    );
};

export default ProjectContent;
