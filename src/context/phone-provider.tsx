import { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { crearPersonajes } from '../data/personajes';
import { Personaje } from '../models/personaje';
import { PhoneContext } from './phone-context';

export function PhoneContextProvider({ children }: { children: ReactElement }) {
    const initialState: Array<Personaje> = [];
    const [display, setDisplay] = useState(initialState);

   

    const context = { personajes };

    return (
        <PhoneContext.Provider value={context}>{children}</PhoneContext.Provider>
    );
}
