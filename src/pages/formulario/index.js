import React from "react";
import { Link , useParams} from "react-router-dom";
import { Header } from "../../components/header";

function Formulario() {
    return (
        <div>
            <Header></Header>
            <p>formulario</p>
            <ul>
                <li><Link to={'/'}>inicio</Link></li>
            </ul>
        </div>
    );
}
export default Formulario;