import React from 'react';
import Contact from '../../components/contact/contact.components';
import Hero from '../../components/hero/hero.component';
import LocationMap from '../../components/location-map/location-map.component';
import ProjectContent from '../../components/project-content/project-content.component';
import './project.styles.scss';

const Project = () => {
    return (
        <div>
            <Hero imgUrl='https://picsum.photos/1500/700' />
            <ProjectContent title='RESIDENCIAS' />
            <ProjectContent title='AMENITIES' />
            <LocationMap />
            <Contact />
        </div>
    );
};

export default Project;
