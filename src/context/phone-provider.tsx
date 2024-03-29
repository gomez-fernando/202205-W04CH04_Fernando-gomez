import { useState, ReactElement } from 'react';
import { PhoneContext } from './phone-context';

export function PhoneContextProvider({ children }: { children: ReactElement }) {
    const initialState: string = '';
    const initCalling: boolean = false;
    const [display, setDisplay] = useState(initialState);
    const [calling, setCalling] = useState(initCalling);

   const addNumber = (number: string) =>{
       if(number === 'delete'){
        setDisplay(display.slice(0, -1))
       } else if(display.length <= 8){
        setDisplay(display + number);
       }
      
        
    
   }

   const startCall = () => {
        setCalling(true);
       setTimeout(() => {
           setCalling(false);
           setDisplay('');
       }, 3000);
   }


    const context = { 
        display,
        addNumber,
        calling,
        startCall,
    };

    return (
        <PhoneContext.Provider value={context}>{children}</PhoneContext.Provider>
    );
}
