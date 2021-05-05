import React from 'react';
import SlickSlider from '../../components/slick-slider/slick-slider.component';
import CardNavigation from '../../components/card-navigation/card-navigation.component';
import Properties from '../../components/properties/properties.component';
import About from '../../components/about/about.component';
import Contact from '../../components/contact/contact.component';

const Homepage = () => {
    const sliderSettings = {
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    return (
        <div>
            <SlickSlider settings={sliderSettings} />
            <CardNavigation />
            <Properties />
            <About />
            <Contact />
        </div>
    );
};

export default Homepage;
