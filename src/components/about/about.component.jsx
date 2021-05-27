import React from 'react';
import Divider from '../divider/divider.component';
import SectionTitle from '../section-title/section-title.component';
import './about.styles.scss';

const About = () => {    
    return (
        <div className='about' id='nosotros'>
            <SectionTitle
                type='h2'
                secondaryTitle='SOBRE'
                mainTitle='NOSOTROS'
            />
            <article className='description'>
                <p>
                    En AS2 Developers creemos en la arquitectura como la fusión
                    de las artes pintura música y escultura; al desarrollo
                    inmobiliario como la integración de las áreas de análisis de
                    mercado, ubicación de terrenos, definición de producto,
                    gerenciamiento, y comercialización como una manera de
                    dialogar con el mundo.
                </p>
                <p>AS2 define sus TOUCH como un nuevo concepto de vida.</p>
                <img src='https://picsum.photos/650/350' alt='' />
            </article>
            <Divider />
        </div>
    );
};

export default About;
