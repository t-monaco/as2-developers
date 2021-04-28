import React from 'react'
import './card-item.styles.scss'
import { Link } from 'react-router-dom';

const CardItem = ({img, name, items}) => {
    return (
        <li className='card-item'>
            <img
                src='https://picsum.photos/600/350'
                alt=''
            />
            <div className="display-text"><h3>{name}</h3></div>
            <div className="item-container">
                {items && items.map(item => <Link className="item">{item.name}</Link>)}
            </div>
        </li>
    );
}

export default CardItem
