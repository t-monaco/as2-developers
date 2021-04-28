import React from 'react'
import SimpleSlider from './../../components/slider/slider.component';
import CardNavigation from '../../components/card-navigation/card-navigation.component';
import Properties from '../../components/properties/properties.component';
import About from '../../components/about/about.component';

const Homepage = () => {
    return (
        <div>
            <SimpleSlider />
            <CardNavigation />
            <Properties />
            <About />
        </div>
    )
}

export default Homepage
