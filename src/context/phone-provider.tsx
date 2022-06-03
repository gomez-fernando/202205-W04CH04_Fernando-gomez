// import { ReactElement } from 'react';
import { useState, ReactElement } from 'react';
import { PhoneContext } from './phone-context';

export function PhoneContextProvider({ children }: { children: ReactElement }) {
    const initialState: string = '';
    const initCalling: boolean = false;
    const [display, setDisplay] = useState(initialState);
    const [calling, setCalling] = useState(initCalling);

   const addNumber = (number: string) =>{
       if(display.length <= 8){
        setDisplay(display + number);
       }
    
   }

//    const call = () => {
//        setCalling(true);
//    }

   const startCall = () => {
        setCalling(true);
       console.log('empeiza');
       setTimeout(() => {
           setCalling(false);
           console.log('termina');
           setDisplay('');
       }, 3000);
   }


    const context = { 
        display,
        addNumber,
        calling,
        // call,
        startCall,
    };

    return (
        <PhoneContext.Provider value={context}>{children}</PhoneContext.Provider>
    );
}
