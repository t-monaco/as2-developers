import React from 'react';
import Property from '../property/property.component';
import SectionTitle from '../section-title/section-title.component';
import './properties.styles.scss';

const Properties = () => {
    return (
        <div className='properties'>
            <SectionTitle type='h2' topText='NUESTROS' bottomText="TOUCH'S" />
            <ul className='properties-container'>
                <Property name='BILBAO' category='FINALIZADO'></Property>
                <Property name='SUCRE' category='FINALIZADO'></Property>
                <Property name='SUPERI' category='EN CONSTTRUCCION'></Property>
                <Property
                    name='LIB 5851'
                    category='FUTUROS LANZAMIENTOS'
                ></Property>
            </ul>
        </div>
    );
};

export default Properties;
