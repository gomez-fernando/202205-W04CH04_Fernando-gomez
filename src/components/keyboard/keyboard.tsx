import { DATA } from "../../models/keyboard-data"
import {Key} from "../key/key"

function Keyboard(){


    return (
        <div className="keyboard-container">
            <ol className="keyboard">
                {
                    DATA.map(item => (
                        <li key={item}>
                            <Key value={item}/>
                        </li>
                    ))

                }
            </ol>
        </div>
    )
}

export default Keyboard