import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { ReactComponent as Logo } from './../../assets/as2_developers--logo.svg';

import './navbar-rb.styles.scss';

const NavbarRB = () => {
    const [scrollTop, setScrollTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(!Boolean(e.target.documentElement.scrollTop));
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop]);

    return (
        <div>
            <Navbar
                expand='md'
                light
                className={`${!scrollTop ? 'scroll' : ''}`}
            >
                <Link smooth to='/#top' class='navbar-brand'>
                    <Logo />
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='' navbar>
                        <NavItem>
                            <Link
                                smooth
                                to='/#top'
                                class='nav-link'
                                onClick={toggle}
                            >
                                HOME
                            </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                DESARROLLOS
                            </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem divider />
                                <DropdownItem header>FINALIZADOS</DropdownItem>
                                <Link
                                    to='/touch01'
                                    class='dropdown-item'
                                    role='menuitem'
                                    // onClick={toggle}
                                >
                                    TOUCH 01
                                </Link>
                                <Link
                                    to='/touch01'
                                    class='dropdown-item'
                                    role='menuitem'
                                    onClick={toggle}
                                >
                                    TOUCH 02
                                </Link>
                                <DropdownItem divider />
                                <DropdownItem header>
                                    EN CONSTRUCCION
                                </DropdownItem>
                                <Link
                                    to='/touch01'
                                    class='dropdown-item'
                                    role='menuitem'
                                    onClick={toggle}
                                >
                                    TOUCH 03
                                </Link>
                                <DropdownItem divider />
                                <DropdownItem header>
                                    FUTUROS LAZAMIENTOS
                                </DropdownItem>
                                <Link
                                    to='/touch01'
                                    class='dropdown-item'
                                    role='menuitem'
                                    onClick={toggle}
                                >
                                    TOUCH 04
                                </Link>
                                <Link
                                    to='/touch01'
                                    class='dropdown-item'
                                    role='menuitem'
                                    onClick={toggle}
                                >
                                    TOUCH 05
                                </Link>
                                <DropdownItem divider />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <Link
                                smooth
                                to='/#nosotros'
                                class='nav-link'
                                onClick={toggle}
                            >
                                NOSOTROS
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                smooth
                                to='/#contacto'
                                class='nav-link'
                                onClick={toggle}
                            >
                                CONTACTO
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarRB;
