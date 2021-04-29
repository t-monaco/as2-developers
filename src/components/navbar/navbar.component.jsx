import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.styles.scss';

import NavItem from '../nav-item/nav-item.component';
import Sidebar from '../sidebar/sidebar.component';
import NavButton from '../nav-button/nav-button.component';
import { ReactComponent as Logo } from './../../assets/as2_developers--logo.svg';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';

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
                <NavItem to='/#top' title='HOME' />
                <NavItem to='/' title='DESARROLLOS'>
                    <DropdownMenu />
                </NavItem>
                <NavItem to={'/#nosotros'} title='NOSOTROS' />
                <NavItem to='/#contacto' title='CONTACTO' />
                <NavItem to='/' title={<NavButton />}>
                    <Sidebar />
                </NavItem>
            </ul>
        </nav>
    );
};

export default Navbar;
