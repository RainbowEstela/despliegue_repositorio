import React from "react";
import { Link , useParams} from "react-router-dom";

function Formulario() {
    return (
        <div>
            <p>formulario</p>
            <ul>
                <li><Link to={'/'}>inicio</Link></li>
            </ul>
        </div>
    );
}
export default Formulario;