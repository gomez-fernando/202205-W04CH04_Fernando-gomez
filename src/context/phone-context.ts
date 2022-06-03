import { createContext } from 'react';

const initialContext: {
    display: string;
    addNumber: (number: string) => void;
    calling: boolean;
    startCall: () => void;

} = {
    display: '',
    addNumber: () => {},
    calling: false,
    startCall: () => {},

};

export const PhoneContext = createContext(initialContext);
