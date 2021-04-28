import React, { useState } from 'react';
import './sidebar.styles.scss';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { ReactComponent as LeftArrow } from './../../assets/left-arrow.svg';
import { ReactComponent as RightArrow } from './../../assets/right-arrow.svg';

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState('main');

    const SidebarItem = ({
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
        <div className='sidebar'>
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames='menu-primary'
                unmountOnExit
            >
                <div className='menu'>
                    <SidebarItem to='/'>HOME</SidebarItem>
                    <SidebarItem rightIcon={<RightArrow />} goToMenu='settings'>
                        DASARROLLOS
                    </SidebarItem>
                    <SidebarItem>NOSOTROS</SidebarItem>
                    <SidebarItem>CONTACTO</SidebarItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames='menu-secondary'
                unmountOnExit
            >
                <div className='menu'>
                    <SidebarItem goToMenu='main' leftIcon={<LeftArrow />} />
                    <SidebarItem>FINALIZADOS</SidebarItem>
                    <SidebarItem submenu>TOUCH #1</SidebarItem>
                    <SidebarItem submenu>TOUCH #2</SidebarItem>
                    <SidebarItem>EN CONSTRUCCION</SidebarItem>
                    <SidebarItem submenu>SUPERI #1</SidebarItem>
                    <SidebarItem>FUTUROS LANZAMIENTOS</SidebarItem>
                    <SidebarItem submenu>RIO #1</SidebarItem>
                    <SidebarItem submenu>GREEN #1</SidebarItem>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Sidebar;
