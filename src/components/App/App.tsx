import React from 'react';
import { PhoneContextProvider } from '../../context/phone-provider';
import Info from '../info/info';
import Phone from '../phone/phone';
import './App.css';

function App() {

  return (
    <>
    <PhoneContextProvider>

        <div className="App">
            <div className="container">
                
                <Info />
                <main className="phone">

                    <Phone />

                </main>
            </div>
      
        </div>
    </PhoneContextProvider>
        
    </>
  )
}

export default App;
