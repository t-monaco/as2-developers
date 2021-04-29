import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.styles.scss';

import NavItem from '../nav-item/nav-item.component';
import Sidebar from '../sidebar/sidebar.component';
import NavButton from '../nav-button/nav-button.component';
import { ReactComponent as Logo } from './../../assets/as2_developers--logo.svg';

const Navbar = () => {

    const [scrollTop, setScrollTop] = useState(true);

    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(!Boolean(e.target.documentElement.scrollTop));
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop]);

    return (
        <nav className={`navbar ${!scrollTop ? 'scroll' : ''}`}>
            <Link smooth to='/#top' className='logo'>
                <Logo />
            </Link>
            <ul className='navbar-nav'>
                <NavItem desktop to='/#top' title='HOME' />
                <NavItem desktop to='/' title='DESARROLLOS' />
                <NavItem
                    desktop
                    to={'/#nosotros'}
                    title='NOSOTROS'
                />
                <NavItem desktop to='/#contacto' title='CONTACTO' />
                <NavItem mobile to='/' title={<NavButton />}>
                    <Sidebar />
                </NavItem>
            </ul>
        </nav>
    );
};

export default Navbar;
