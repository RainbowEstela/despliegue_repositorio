import React from "react";
import { Link , useParams} from "react-router-dom";

function Detalle() {
    return (

        <div>
            <p>Detalle</p>
            <ul>
                <li><Link to={'/'}>inicio</Link></li>
            </ul>
        </div>
    );
}
export default Detalle;