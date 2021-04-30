import React, { useContext, useEffect, useRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { CSSTransition } from 'react-transition-group';
import './dropdown-menu.styles.scss';
import { ReactComponent as LeftArrow } from './../../assets/left-arrow.svg';
import { ReactComponent as RightArrow } from './../../assets/right-arrow.svg';
import MenuContext from '../../contexts/menu/menu.context';

const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    const { toggleOpen } = useContext(MenuContext);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }


    const DropdownItem = ({ children, goToMenu, leftIcon, rightIcon, to }) => {
        return (
            <Link
                smooth
                to={to}
                className='menu-item'
                onClick={goToMenu ? () => setActiveMenu(goToMenu) : toggleOpen}
            >
                {leftIcon && <span className='icon-left'>{leftIcon}</span>}
                {children}
                {rightIcon && <span className='icon-right'>{rightIcon}</span>}
            </Link>
        );
    };

    return (
        <div
            className='dropdown'
            style={{ height: menuHeight }}
            ref={dropdownRef}
        >
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames='menu-primary'
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className='menu menu-primary'>
                    <DropdownItem to='/#top'>HOME</DropdownItem>
                    <DropdownItem
                        rightIcon={<RightArrow />}
                        goToMenu='desarrollos'
                    >
                        DASARROLLOS
                    </DropdownItem>
                    <DropdownItem to='/#nosotros'>NOSOTROS</DropdownItem>
                    <DropdownItem to='/#contacto' >CONTACTO</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'desarrollos'}
                timeout={500}
                classNames='menu-secondary'
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className='menu menu-secondary'>
                    <DropdownItem goToMenu='main' leftIcon={<LeftArrow />}>
                        DESARROLLOS
                    </DropdownItem>
                    <DropdownItem
                        goToMenu='finalizados'
                        rightIcon={<RightArrow />}
                    >
                        FINALIZADOS
                    </DropdownItem>
                    <DropdownItem
                        goToMenu='construccion'
                        rightIcon={<RightArrow />}
                    >
                        EN CONSTRUCCION
                    </DropdownItem>
                    <DropdownItem goToMenu='futuros' rightIcon={<RightArrow />}>
                        FUTUROS LANZAMIENTOS
                    </DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'finalizados'}
                timeout={500}
                classNames='menu-tertiary'
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className='menu menu-tertiary'>
                    <DropdownItem
                        goToMenu='desarrollos'
                        leftIcon={<LeftArrow />}
                    >
                        FINALIZADOS
                    </DropdownItem>
                    <DropdownItem to='touch-01'>TOUCH #1</DropdownItem>
                    <DropdownItem>TOUCH #2</DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'construccion'}
                timeout={500}
                classNames='menu-tertiary'
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className='menu menu-tertiary'>
                    <DropdownItem
                        goToMenu='desarrollos'
                        leftIcon={<LeftArrow />}
                    >
                        EN CONSTRUCCION
                    </DropdownItem>
                    <DropdownItem>SUPERI #1</DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'futuros'}
                timeout={500}
                classNames='menu-tertiary'
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className='menu menu-tertiary'>
                    <DropdownItem
                        goToMenu='desarrollos'
                        leftIcon={<LeftArrow />}
                    >
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
