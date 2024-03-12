import React from "react";
import { Link , useParams} from "react-router-dom";
import { Header } from "../../components/header";

function Gatos() {
    document.title = "Refugio second chance - adoptar gatos Almería"// titulo posicionado por las palabras clave
    // titulo posicionado por adoptar gatos en almeria
    document.querySelector("meta[name='description']").content="Aquí podrá adoptar gatos en Almería, tenemos un listado de nuestos gatos en busca de una nueva familia.";

    return (
        <div>
            <Header></Header>

            <p>Pagina Inicio</p>
            <ul>
                <li><Link to={'/'}>inicio</Link></li>
                <li><Link to={'/formulario'}>Formaulario</Link></li>
                <li><Link to={'/detalle'}>detalle</Link></li>
            </ul>
        </div>
    );
}
export default Gatos;