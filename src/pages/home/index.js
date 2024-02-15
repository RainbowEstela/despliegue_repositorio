import React from "react";
import { Link , useParams} from "react-router-dom";

function Home() {
    return (
        <div>
            <p>Pagina Inicio</p>
            <ul>
                <li><Link to={'/'}>inicio</Link></li>
                <li><Link to={'/formulario'}>Formaulario</Link></li>
                <li><Link to={'/detalle'}>detalle</Link></li>
            </ul>
        </div>
    );
}
export default Home;