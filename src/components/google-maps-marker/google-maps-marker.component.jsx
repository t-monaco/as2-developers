import React from 'react';
import './google-maps-marker.styles.scss';
import { ReactComponent as Logo } from './../../assets/as2_developers--logo.svg';

const GoogleMapsMarker = ({ color, text }) => {
    return (
        <div className='marker' style={{ cursor: 'pointer' }} title={text}>
            <Logo className='logo' />
        </div>
    );
};

export default GoogleMapsMarker;
