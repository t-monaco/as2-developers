import React from 'react';
import { Link } from 'react-router-dom';
import './property.styles.scss';

const Property = ({ imgUrl, linkName, name, status }) => {
    return (
        <li className='property-container'>
            <Link className='property' to={`/${linkName}`}>
                <img src={imgUrl} alt='' />
                <span className='divider' />
                <div className='property-info'>
                    <h3 className='name'>{name}</h3>
                    <p className='status'>{status.toUpperCase()}</p>
                </div>
            </Link>
        </li>
    );
};

export default Property;
