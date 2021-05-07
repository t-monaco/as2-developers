import React from 'react';
import Divider from '../divider/divider.component';
import SimpleMap from '../google-maps/google-maps.component';
import SectionTitle from '../section-title/section-title.component';
import './location-map.styles.scss';

const LocationMap = ({location: {address, lat, lng} }) => {
    return (
        <div className='location-map'>
            <SectionTitle type='h2' mainTitle='UBICACIÓN' />
            <p className='location-address'>
                {address}
            </p>
            <SimpleMap lat={lat} lng={lng} name={address}/>
            <Divider />
        </div>
    );
};

export default LocationMap;
