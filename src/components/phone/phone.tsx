// import { useContext } from "react";
// import { PhoneContext } from "../../context/phone-context";
import Actions from "../actions/actions";
import Keyboard from "../keyboard/keyboard";

function Phone() {
    // const {display} = useContext(PhoneContext);
    // console.log('display: ' + display);

    return (
        <>
            <Keyboard />
            <Actions />
        </>
    )
    
}

export default Phone;