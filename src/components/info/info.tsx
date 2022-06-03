import { useContext } from "react";
import { PhoneContext } from "../../context/phone-context";


function Info(){
    let info = 'Dial a 9 digits number';
    const {calling, display} = useContext(PhoneContext);

    if(display.length === 9){
        info = 'You are able to call'
    }
    if(calling){
        info = 'Calling...'
    }


    return (
          <>
            {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
          <span className="message">{info}</span>
          </>
          
    )
}

export default Info;