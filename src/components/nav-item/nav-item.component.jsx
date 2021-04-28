import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav-item.styles.scss'

const NavItem = ({children, hideMobile, title, to}) => {
    const [open, setOpen] = useState(false);

    const childrenWithProps = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            open,
        });
    });

    return (
        <li className={`nav-item ${open ? 'open' : ''}`}>
            <Link
                className={`${hideMobile ? 'hide' : ''}`}
                to={to}
                onClick={() => setOpen(!open)}
            >
                {title}
            </Link>
            {childrenWithProps}
        </li>
    );
}

export default NavItem
