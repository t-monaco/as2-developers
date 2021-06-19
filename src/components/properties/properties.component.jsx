import React, { useContext } from 'react';
import Property from '../property/property.component';
import SectionTitle from '../section-title/section-title.component';
import Divider from './../divider/divider.component';
import PropertiesContext from './../../contexts/properties/properties.context';
import './properties.styles.scss';

const Properties = () => {
    const propertiesContext = useContext(PropertiesContext);

    return (
        <div className='properties'>
            <SectionTitle
                type='h2'
                mainTitle="TOUCH"
            />
            <ul className='properties-container'>
                {propertiesContext
                    .filter((property) => property.category === 'touch')
                    .map((property, key) => (
                        <Property
                            key={key}
                            name={property.name}
                            status={property.status}
                            linkName={property.linkName}
                            imgUrl={property.thumbnail}
                        ></Property>
                    ))}
            </ul>
            <Divider />
        </div>
    );
};

export default Properties;
