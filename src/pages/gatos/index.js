import React from "react";
import { Link , useParams} from "react-router-dom";
import { Header } from "../../components/header";
import { BreadContainer, BreadDesactive } from "../../components/breadcrumb";

function Gatos() {
    document.title = "Refugio second chance - adoptar gatos Almería"// titulo posicionado por las palabras clave
    // titulo posicionado por adoptar gatos en almeria
    document.querySelector("meta[name='description']").content="Aquí podrá adoptar gatos en Almería, tenemos un listado de nuestos gatos en busca de una nueva familia.";

    return (
        <div>
            <Header></Header>
            <BreadContainer>
                <BreadDesactive>gatos</BreadDesactive>
            </BreadContainer>
            <p>Pagina Inicio</p>
            
        </div>
    );
}
export default Gatos;