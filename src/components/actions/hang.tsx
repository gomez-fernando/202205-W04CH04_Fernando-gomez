import { useContext } from "react";
import { PhoneContext } from "../../context/phone-context";

function Hang(){
    const { calling} = useContext(PhoneContext);
    
    let classi = 'hang off';
    
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