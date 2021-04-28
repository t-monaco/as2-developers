import React from 'react'
import SimpleSlider from './../../components/slider/slider.component';
import CardNavigation from '../../components/card-navigation/card-navigation.component';
import Properties from '../../components/properties/properties.component';

const Homepage = () => {
    return (
        <div>
            <SimpleSlider />
            <CardNavigation />
            <Properties />
        </div>
    )
}

export default Homepage
