import React, { useContext } from 'react';
import Contact from '../../components/contact/contact.component';
import Hero from '../../components/hero/hero.component';
import LocationMap from '../../components/location-map/location-map.component';
import ProjectContent from '../../components/project-content/project-content.component';
import './project.styles.scss';
import PropertiesContext from './../../contexts/properties/properties.context';
import { useParams } from 'react-router-dom';
import Blueprint from '../../components/blueprint/blueprint.component';

const Project = () => {
    const { projectId } = useParams();
    const propertyContext = useContext(PropertiesContext).filter(
        (property) => property.linkName === projectId
    )[0];

    return (
        <div>
            <Hero imgUrl={propertyContext.heroImage} />
            <ProjectContent
                title={propertyContext.residence.title.toUpperCase()}
                context={propertyContext.residence}
            />
            {propertyContext.amenities && (
                <ProjectContent
                    title={propertyContext.amenities.title.toUpperCase()}
                    context={propertyContext.amenities}
                />
            )}
            <LocationMap location={propertyContext.location} />
            <Blueprint
                blueprint={propertyContext.blueprint}
                linkName={propertyContext.linkName}
                name={propertyContext.name}
            />
            <Contact />
        </div>
    );
};

export default Project;
