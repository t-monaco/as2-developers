import React from 'react';
import Divider from '../divider/divider.component';
import SectionTitle from '../section-title/section-title.component';
import CardItem from './../card-item/card-item.component';

import './card-navigation.styles.scss';

const CardNavigation = () => {
    const items = [{ name: `TOUCH'S #1` }, { name: `TOUCH'S #2` }];

    return (
        <div className='card-navigation'>
            <SectionTitle type='h2' mainTitle='DESARROLLOS' />
            <ul className='card-container'>
                <CardItem name='FINALIZADOS' items={items}></CardItem>
                <CardItem name='EN CONSTRUCCION' items={items}></CardItem>
                <CardItem name='FUTUROS LANZAMIENTOS' items={items}></CardItem>
            </ul>
            <Divider />
        </div>
    );
};

export default CardNavigation;
