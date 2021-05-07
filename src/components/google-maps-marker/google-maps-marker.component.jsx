import React from 'react';
import './google-maps-marker.styles.scss';

const GoogleMapsMarker = ({color, text}) => {
    return (
        <div
            className='marker'
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={text}
        />
    );
};

export default GoogleMapsMarker;
