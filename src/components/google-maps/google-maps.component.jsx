import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import GoogleMapsMarker from './../google-maps-marker/google-maps-marker.component';

const SimpleMap = ({ lat, lng, name }) => {
    const [center, setCenter] = useState({});
    const [zoom] = useState(14);
    const secretKey =  process.env.REACT_APP_GOOGLE_MAPS_API_KEY

    useEffect(() => {
        setCenter({ lat, lng })
    }, [lat, lng])

    const getMapOptions = () => {
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
                center={center}
                defaultZoom={zoom}
                options={getMapOptions}
            >
                <GoogleMapsMarker lat={lat} lng={lng} text={name} />
            </GoogleMapReact>
        </div>
    );
};

export default SimpleMap;
