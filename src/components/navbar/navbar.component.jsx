import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/as2_developers--logo.svg';
import './navbar.styles.scss';

import NavItem from '../nav-item/nav-item.component';
import Sidebar from '../sidebar/sidebar.component';
import NavButton from '../nav-button/nav-button.component';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Logo className='logo' />
            <ul className='navbar-nav'>
                <NavItem hideMobile to='/' title='HOME' />
                <NavItem hideMobile to='/' title='DESARROLLOS' />
                <NavItem hideMobile to='/' title='NOSOTROS' />
                <NavItem hideMobile to='/' title='CONTAChideMobile TO' />
                <NavItem to='/' title={<NavButton />}>
                    <Sidebar />
                </NavItem>
            </ul>
        </nav>
    );
};

export default Navbar;
