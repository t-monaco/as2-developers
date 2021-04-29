import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './nav-item.styles.scss';

const NavItem = ({ children, desktop, mobile, title, to }) => {
    const [open, setOpen] = useState(false);

    const childrenWithProps = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            open,
        });
    });

    return (
        <li className={`nav-item ${open ? 'open' : ''}`}>
            <Link
                className={`${desktop ? 'desktop' : ''} ${
                    mobile ? 'mobile' : ''
                }`}
                to={to}
                onClick={() => setOpen(!open)}
                smooth
            >
                {title}
            </Link>
            {childrenWithProps}
        </li>
    );
};

export default NavItem;
