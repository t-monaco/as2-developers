import React, { useContext, useEffect, useState } from 'react';
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
import PropertiesContext from './../../contexts/properties/properties.context';

import './navbar-rb.styles.scss';

const NavbarRB = () => {
    const [scrollTop, setScrollTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const propertiesContext = useContext(PropertiesContext);

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
                <Link smooth to='/#top' className='navbar-brand'>
                    <Logo />
                </Link>
                <NavbarToggler
                    onClick={toggle}
                    className={`${isOpen ? 'open' : ''}`}
                />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='' navbar>
                        <NavItem>
                            <Link
                                smooth
                                to='/#top'
                                className='nav-link'
                                onClick={toggle}
                            >
                                HOME
                            </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                DESARROLLOS
                            </DropdownToggle>
                            <DropdownMenu left='true'>
                                <DropdownItem divider />
                                <DropdownItem header>FINALIZADOS</DropdownItem>
                                {propertiesContext
                                    .filter(
                                        (property) =>
                                            property.status === 'finalizado'
                                    )
                                    .map((property) => (
                                        <DropdownItem key={property.id}>
                                            <Link
                                                to={`/${property.linkName}`}
                                                onClick={toggle}
                                            >
                                                {property.name}
                                            </Link>
                                        </DropdownItem>
                                    ))}
                                <DropdownItem divider />
                                <DropdownItem header>
                                    EN CONSTRUCCION
                                </DropdownItem>
                                {propertiesContext
                                    .filter(
                                        (property) =>
                                            property.status ===
                                            'en construccion'
                                    )
                                    .map((property) => (
                                        <DropdownItem key={property.id}>
                                            <Link
                                                to={`/${property.linkName}`}
                                                onClick={toggle}
                                            >
                                                {property.name}
                                            </Link>
                                        </DropdownItem>
                                    ))}
                                <DropdownItem divider />
                                <DropdownItem header>
                                    FUTUROS LAZAMIENTOS
                                </DropdownItem>
                                {propertiesContext
                                    .filter(
                                        (property) =>
                                            property.status ===
                                            'futuro lanzamiento'
                                    )
                                    .map((property) => (
                                        <DropdownItem key={property.id}>
                                            <Link
                                                to={`/${property.linkName}`}
                                                onClick={toggle}
                                            >
                                                {property.name}
                                            </Link>
                                        </DropdownItem>
                                    ))}
                                <DropdownItem divider />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <Link
                                smooth
                                to='/#nosotros'
                                className='nav-link'
                                onClick={toggle}
                            >
                                NOSOTROS
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                smooth
                                to='/#contacto'
                                className='nav-link'
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
