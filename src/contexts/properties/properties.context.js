import { createContext } from 'react';
import PROPERTIES_DATA from './properties.data';

const PropertiesContext = createContext(PROPERTIES_DATA);

export default PropertiesContext;
