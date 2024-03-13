import React from "react";
import { Link , useParams} from "react-router-dom";
import { Header } from "../../components/header";
import { BreadContainer } from "../../components/breadcrumb";

function Home() {
    document.title = "Refugio second chance - home"// titulo posicionado por marca
    // meta descripción usando las palabras clave de la url home
    document.querySelector("meta[name='description']").content="Second Chance es un refugio animal en Almería que intenta ser temporalmente el hogar de animales abandonados en busca de un nuevo amigo.";
    return (
        <div>
            <Header></Header>
            <BreadContainer></BreadContainer>

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