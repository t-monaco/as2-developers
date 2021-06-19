import React from 'react';
import './card-item.styles.scss';
import { Link } from 'react-router-dom';

const CardItem = ({ imageUrl, name, items }) => {
    return (
        <li className='card-item'>
            <img src={imageUrl} alt='' />
            <div className='display-text'>
                <h3>{name}</h3>
            </div>
            <div className='item-container'>
                {items &&
                    items.map(({ name, linkName, logo }, key) => (
                        <Link
                            to={`/${linkName}`}
                            className={`item ${!linkName ? 'disabled' : ''}`}
                            key={key}
                        >
                            <img
                                className='property-logo'
                                src={logo}
                                alt={name}
                            />
                        </Link>
                    ))}
            </div>
        </li>
    );
};

export default CardItem;
