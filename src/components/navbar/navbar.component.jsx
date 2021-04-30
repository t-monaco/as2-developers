import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.styles.scss';

import NavItem from '../nav-item/nav-item.component';
import Sidebar from '../sidebar/sidebar.component';
import NavButton from '../nav-button/nav-button.component';
import { ReactComponent as Logo } from './../../assets/as2_developers--logo.svg';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import MenuContext from '../../contexts/menu/menu.context';

const Navbar = () => {
    const [scrollTop, setScrollTop] = useState(true);
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

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
                <MenuContext.Provider
                    value={{
                        open,
                        toggleOpen,
                    }}
                >
                    <NavItem title='DESARROLLOS'>
                        <DropdownMenu />
                    </NavItem>
                </MenuContext.Provider>
                <NavItem to={'/#nosotros'} title='NOSOTROS' />
                <NavItem to='/#contacto' title='CONTACTO' />
                <MenuContext.Provider
                    value={{
                        open,
                        toggleOpen,
                    }}
                >
                    <NavItem title={<NavButton />}>
                        <DropdownMenu />
                    </NavItem>
                </MenuContext.Provider>
            </ul>
        </nav>
    );
};

export default Navbar;
