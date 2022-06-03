import { useContext } from "react";
import { PhoneContext } from "../../context/phone-context";

function Hang(){
    const { calling} = useContext(PhoneContext);
    
    let classi = 'hang off';
    // if(display.length === 9){
    //     classi = 'hang active'
    // // eslint-disable-next-line no-extra-boolean-cast
    // } 
     if(calling){
        classi = 'hang active'
    }

    return (
        <>
            {/* <!-- Sólo se tiene que ver un botón u otro --> */}
            <a href="#" className={classi}>Hang</a>
        </>
          
    )
}

export default Hang;