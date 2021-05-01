import React from 'react';
import Divider from '../divider/divider.component';
import SectionTitle from '../section-title/section-title.component';
import './location-map.styles.scss';

const LocationMap = () => {
    return (
        <div className='location-map'>
            <SectionTitle type='h2' mainTitle='UBICACIÓN' />
            <p className='location-address'>
                Avenida del Libertador 5851, CABA
            </p>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.842108355338!2d-58.450106333819605!3d-34.55872435665651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5cc9c770f53%3A0x887c6a32a81d02ca!2sAv.%20del%20Libertador%205851%2C%20C1428%20CABA!5e0!3m2!1sen!2sar!4v1619833855438!5m2!1sen!2sar'
                allowfullscreen=''
                loading='lazy'
                title='google-maps'
            ></iframe>
            <Divider />
        </div>
    );
};

export default LocationMap;
