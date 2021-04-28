import React from 'react'
import './nav-button.styles.scss'

const NavButton = () => {
    return (
        <button className='nav-button'>
            <span
                className='button-stick --top'
            ></span>
            <span
                className='button-stick --middle'
            ></span>
            <span
                className='button-stick --bottom'
            ></span>
        </button>
    );
}

export default NavButton
