import React from 'react';
import './card-item.styles.scss';
import { Link } from 'react-router-dom';

const CardItem = ({ img, logo, name, items }) => {
    return (
        <li className='card-item'>
            <img src='https://picsum.photos/600/350' alt='' />
            <div className='display-text'>
                <h3>{name}</h3>
            </div>
            <div className='item-container'>
                {items &&
                    items.map(({name, linkName}, key) => (
                        <Link to={`/${linkName}`} className='item' key={key}>
                            <img className='property-logo' src='images/sucre/logo/logo_01.png' alt=""/>
                        </Link>
                    ))}
            </div>
        </li>
    );
};

export default CardItem;
