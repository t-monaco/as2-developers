import React from 'react';
import './project-content.styles.scss';
import SectionTitle from '../section-title/section-title.component';
import SlickSlider from '../slick-slider/slick-slider.component';

const ProjectContent = ({ title, context }) => {
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
            <SlickSlider settings={sliderSettings} images={context.imagesUrl}/>

            <div className='description'>
                {context.text.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
            <div className='divider'></div>
        </div>
    );
};

export default ProjectContent;
