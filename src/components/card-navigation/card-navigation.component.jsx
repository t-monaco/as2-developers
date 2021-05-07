import React, { useContext } from 'react';
import Divider from '../divider/divider.component';
import SectionTitle from '../section-title/section-title.component';
import CardItem from './../card-item/card-item.component';
import PropertiesContext from './../../contexts/properties/properties.context';

import './card-navigation.styles.scss';

const CardNavigation = () => {
    const propertiesContext = useContext(PropertiesContext);

    return (
        <div className='card-navigation'>
            <SectionTitle type='h2' mainTitle='DESARROLLOS' />
            <ul className='card-container'>
                <CardItem
                    name='FINALIZADOS'
                    items={propertiesContext
                        .filter((property) => property.status === 'finalizado')
                        .slice(0, 2)}
                ></CardItem>
                <CardItem
                    name='EN CONSTRUCCION'
                    items={propertiesContext
                        .filter(
                            (property) => property.status === 'en construccion'
                        )
                        .slice(0, 2)}
                ></CardItem>
                <CardItem
                    name='FUTUROS LANZAMIENTOS'
                    items={propertiesContext
                        .filter(
                            (property) =>
                                property.status === 'futuro lanzamiento'
                        )
                        .slice(0, 2)}
                ></CardItem>
            </ul>
            <Divider />
        </div>
    );
};

export default CardNavigation;
