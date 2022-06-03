import React from 'react';
import { PhoneContextProvider } from '../../context/phone-provider';
import Phone from '../phone/phone';
import './App.css';

function App() {

  return (
    <>
    <PhoneContextProvider>

        <div className="App">
            <div className="container">
                {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
                <span className="message">Calling...</span>
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
