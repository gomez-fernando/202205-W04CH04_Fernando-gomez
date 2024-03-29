import { SyntheticEvent, useContext } from "react";
import { PhoneContext } from "../../context/phone-context";



export function Key({value}: {value: string}) {

    const {addNumber} = useContext(PhoneContext);



    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        const value = element.value;
        addNumber(value);
    }

  return (
    <button onClick={handleChange} className={value === 'delete' ? 'key big' : 'key'} value={value}>{value}</button>
  );
}

export default Key;
