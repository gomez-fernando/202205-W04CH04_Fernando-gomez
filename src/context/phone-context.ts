import { createContext } from 'react';

const initialContext: {
    display: string;
    addNumber: (number: string) => void;
} = {
    display: '',
    addNumber: () => {}
};

export const PhoneContext = createContext(initialContext);
