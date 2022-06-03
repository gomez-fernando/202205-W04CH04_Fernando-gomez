import { useContext } from "react";
import { PhoneContext } from "../../context/phone-context";

function Call(){
    const {display, calling, startCall} = useContext(PhoneContext);
    
    let classi = 'call';
    if(display.length === 9){
        classi = 'call active'
    // eslint-disable-next-line no-extra-boolean-cast
    } 
     if(calling){
        classi = 'call off'
    }


    return (
        
          <>
        
            {/* <a href="#" className="call" >Call</a> */}
            {/* <a href="#" className={display.length === 9 ? 'call active' : 'call'}>Call</a> */}
            <a href="#" onClick={startCall} className={classi} >Call</a>
            {/* {calling === true && (
                <a href="#" onClick={startCall} className={classi}>Call</a>
            )} */}
          </>
          
    )
}

export default Call;