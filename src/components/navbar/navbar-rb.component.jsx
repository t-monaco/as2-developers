import React, { useEffect, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
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
                <NavbarBrand href='/'>
                    <Logo />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='' navbar>
                        <NavItem>
                            <NavLink href='/components/'>HOME</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                DESARROLLOS
                            </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem divider />
                                <DropdownItem header>FINALIZADOS</DropdownItem>
                                <DropdownItem href='/touch01'>
                                    TOUCH 01
                                </DropdownItem>
                                <DropdownItem href='/touch01'>
                                    TOUCH 02
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>
                                    EN CONSTRUCCION
                                </DropdownItem>
                                <DropdownItem href='/touch01'>
                                    TOUCH 03
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>
                                    FUTUROS LAZAMIENTOS
                                </DropdownItem>
                                <DropdownItem href='/touch01'>
                                    TOUCH 04
                                </DropdownItem>
                                <DropdownItem divider />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink onClick={toggle} href='/#nosotros'>
                                NOSOTROS
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggle} href='/#contacto'>
                                CONTACTO
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarRB;
