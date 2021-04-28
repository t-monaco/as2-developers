import React from 'react';
import CardItem from './../card-item/card-item.component';

import './card-navigation.styles.scss';

const CardNavigation = () => {
    const items = [{ name: `TOUCH'S #1` }, { name: `TOUCH'S #2` }];

    return (
        <div className='card-navigation'>
            <h2 className='title'>DESARROLLOS</h2>
            <ul className='card-container'>
                <CardItem name='FINALIZADOS' items={items}></CardItem>
                <CardItem name='EN CONSTRUCCION' items={items}></CardItem>
                <CardItem name='FUTUROS LANZAMIENTOS' items={items}></CardItem>
            </ul>
        </div>
    );
};

export default CardNavigation;
