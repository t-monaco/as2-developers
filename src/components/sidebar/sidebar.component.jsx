import React, { useContext, useState } from 'react';
import './sidebar.styles.scss';
import { CSSTransition } from 'react-transition-group';
import { HashLink as Link } from 'react-router-hash-link';
import { ReactComponent as LeftArrow } from './../../assets/left-arrow.svg';
import { ReactComponent as RightArrow } from './../../assets/right-arrow.svg';
import MenuContext from '../../contexts/menu/menu.context';

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const { toggleOpen } = useContext(MenuContext);

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
                onClick={goToMenu ? () => setActiveMenu(goToMenu) : toggleOpen}
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
                    <SidebarItem
                        rightIcon={<RightArrow />}
                        goToMenu='desarrollos'
                    >
                        DASARROLLOS
                    </SidebarItem>
                    <SidebarItem to='/#nosotros'>NOSOTROS</SidebarItem>
                    <SidebarItem>CONTACTO</SidebarItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'desarrollos'}
                timeout={500}
                classNames='menu-secondary'
                unmountOnExit
            >
                <div className='menu'>
                    <SidebarItem
                        goToMenu='main'
                        leftIcon={<LeftArrow />}
                    >
                        DESARROLLOS
                    </SidebarItem>
                    <SidebarItem
                        goToMenu='finalizados'
                        rightIcon={<RightArrow />}
                    >
                        FINALIZADOS
                    </SidebarItem>
                    <SidebarItem
                        goToMenu='construccion'
                        rightIcon={<RightArrow />}
                    >
                        EN CONSTRUCCION
                    </SidebarItem>
                    <SidebarItem goToMenu='futuros' rightIcon={<RightArrow />}>
                        FUTUROS LANZAMIENTOS
                    </SidebarItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'finalizados'}
                timeout={500}
                classNames='menu-secondary'
                unmountOnExit
            >
                <div className='menu'>
                    <SidebarItem goToMenu='desarrollos' leftIcon={<LeftArrow />}>
                        FINALIZADOS
                    </SidebarItem>
                    <SidebarItem to='touch-01'>TOUCH #1</SidebarItem>
                    <SidebarItem>TOUCH #2</SidebarItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'construccion'}
                timeout={500}
                classNames='menu-secondary'
                unmountOnExit
            >
                <div className='menu'>
                    <SidebarItem goToMenu='desarrollos' leftIcon={<LeftArrow />}>
                        EN CONSTRUCCION
                    </SidebarItem>
                    <SidebarItem>SUPERI #1</SidebarItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'futuros'}
                timeout={500}
                classNames='menu-tertiary'
                unmountOnExit
            >
                <div className='menu'>
                    <SidebarItem goToMenu='desarrollos' leftIcon={<LeftArrow />}>
                        FUTUROS LANZAMIENTOS
                    </SidebarItem>
                    <SidebarItem>RIO #1</SidebarItem>
                    <SidebarItem>GREEN #1</SidebarItem>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Sidebar;
