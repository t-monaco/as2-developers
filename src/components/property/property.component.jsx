import React from 'react';
import { Link } from 'react-router-dom';
import './property.styles.scss';

const Property = ({ img, name, category }) => {
    return (
        <li className='property-container'>
            <Link className='property'>
                <img src='https://picsum.photos/650/350' alt='' />
                <span className='divider' />
                <div className='property-info'>
                    <h3 className='name'>{name}</h3>
                    <p className='category'>{category}</p>
                </div>
            </Link>
        </li>
    );
};

export default Property;
