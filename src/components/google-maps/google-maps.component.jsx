import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import GoogleMapsMarker from './../google-maps-marker/google-maps-marker.component';

const SimpleMap = ({ lat, lng, name }) => {
    const [center, setCenter] = useState({ lat: lat, lng: lng });
    const [zoom, setZoom] = useState(14);
    const [secretKey, setSecretKey] = useState(
        process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    );


    const getMapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [
                {
                    featureType: 'poi',
                    elementType: 'labels',
                    stylers: [{ visibility: 'on' }],
                },
            ],
        };
    };

    return (
        <div className='google-maps'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: secretKey,
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={getMapOptions}
            >
                <GoogleMapsMarker lat={lat} lng={lng} text={name} />
            </GoogleMapReact>
        </div>
    );
};

export default SimpleMap;
