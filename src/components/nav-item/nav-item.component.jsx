import React, { useContext, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { CSSTransition } from 'react-transition-group';
import MenuContext from './../../contexts/menu/menu.context';
import './nav-item.styles.scss';

const NavItem = ({ children, title, to }) => {
    const { open, toggleOpen } = useContext(MenuContext);

    return (
        <li className={`nav-item ${open ? 'open' : ''}`}>
            <Link onClick={toggleOpen} smooth to={to}>
                {title}
            </Link>
            {children && (
                <CSSTransition
                    in={open}
                    timeout={500}
                    classNames='nav-item-transition'
                    unmountOnExit
                >
                    {children}
                </CSSTransition>
            )}
        </li>
    );
};

export default NavItem;
