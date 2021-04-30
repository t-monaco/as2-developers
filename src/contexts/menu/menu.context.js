import { createContext } from 'react';

const MenuContext = createContext({
    open: false,
    toggleOpen: () => {},
});

export default MenuContext