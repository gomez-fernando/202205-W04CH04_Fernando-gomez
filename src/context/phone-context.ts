import { createContext } from 'react';

const initialContext: {
    display: string;
} = {
    display: '',
};

export const PhoneContext = createContext(initialContext);
