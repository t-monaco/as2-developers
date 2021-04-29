import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './dropdown-menu.styles.scss';
import { ReactComponent as LeftArrow } from './../../assets/left-arrow.svg';
import { ReactComponent as RightArrow } from './../../assets/right-arrow.svg';

const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main');

    const DropdownItem = ({
        children,
        goToMenu,
        leftIcon,
        rightIcon,
        submenu,
        to,
    }) => {
        return (
            <Link
                to={to}
                className={`menu-item ${submenu ? 'submenu' : ''}`}
                onClick={() => goToMenu && setActiveMenu(goToMenu)}
            >
                {leftIcon && <span className='icon-left'>{leftIcon}</span>}
                {children}
                {rightIcon && <span className='icon-right'>{rightIcon}</span>}
            </Link>
        );
    };

    return (
        <div className='dropdown'>
            {/* <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames='menu-primary'
                unmountOnExit
            >
                <div className='menu'>
                    <DropdownItem to='/'>HOME</DropdownItem>
                    <DropdownItem rightIcon={<RightArrow />} goToMenu='settings'>
                        DASARROLLOS
                    </DropdownItem>
                    <DropdownItem>NOSOTROS</DropdownItem>
                    <DropdownItem>CONTACTO</DropdownItem>
                </div>
            </CSSTransition> */}

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames='menu-primary'
                unmountOnExit
            >
                <div className='menu'>
                    <DropdownItem goToMenu='finalizados'>
                        FINALIZADOS
                    </DropdownItem>
                    <DropdownItem goToMenu='construccion'>
                        EN CONSTRUCCION
                    </DropdownItem>
                    <DropdownItem goToMenu='futuros'>
                        FUTUROS LANZAMIENTOS
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'finalizados'}
                timeout={500}
                classNames='menu-secondary'
                unmountOnExit
            >
                <div className='menu'>
                    <DropdownItem goToMenu='main' leftIcon={<LeftArrow />}>
                        FINALIZADOS
                    </DropdownItem>
                    <DropdownItem>TOUCH #1</DropdownItem>
                    <DropdownItem>TOUCH #2</DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'construccion'}
                timeout={500}
                classNames='menu-secondary'
                unmountOnExit
            >
                <div className='menu'>
                    <DropdownItem goToMenu='main' leftIcon={<LeftArrow />}>
                        EN CONSTRUCCION
                    </DropdownItem>
                    <DropdownItem>SUPERI #1</DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'futuros'}
                timeout={500}
                className='menu-secondary'
                classNames='menu-secondary'
                unmountOnExit
            >
                <div className='menu'>
                    <DropdownItem goToMenu='main' leftIcon={<LeftArrow />}>
                        FUTUROS LANZAMIENTOS
                    </DropdownItem>
                    <DropdownItem>RIO #1</DropdownItem>
                    <DropdownItem>GREEN #1</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
};

export default DropdownMenu;
