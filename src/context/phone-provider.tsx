// import { ReactElement } from 'react';
import { useState, ReactElement } from 'react';
import { PhoneContext } from './phone-context';

export function PhoneContextProvider({ children }: { children: ReactElement }) {
    const initialState: string = '';
    const [display, setDisplay] = useState(initialState);

   const addNumber = (number: string) =>{
       if(display.length <= 8){
        setDisplay(display + number);
        //    console.log('display: ' + );
       }
    
   }

    const context = { 
        display,
        addNumber
    };

    return (
        <PhoneContext.Provider value={context}>{children}</PhoneContext.Provider>
    );
}
