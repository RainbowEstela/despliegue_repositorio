import React, { useContext } from "react";
import { Link , useParams} from "react-router-dom";
import { Header } from "../../components/header";
import { BreadContainer, BreadDesactive } from "../../components/breadcrumb";
import { Titulo } from "../../components/textos";
import { Card } from "../../components/card";
import { AppContext } from "../../application/provider";
import { Footer } from "../../components/footer";

function Gatos() {
    document.title = "Refugio second chance - adoptar gatos Almería"// titulo posicionado por las palabras clave
    // titulo posicionado por adoptar gatos en almeria
    document.querySelector("meta[name='description']").content="Aquí podrá adoptar gatos en Almería, tenemos un listado de nuestos gatos en busca de una nueva familia.";

    const [state, setState] = useContext(AppContext);

    return (
        <div>
            
            <Header></Header>
            <BreadContainer>
                <BreadDesactive>gatos</BreadDesactive>
            </BreadContainer>
            
            <main className="py-5 px-8 bg-gray-100">
                <Titulo>Gatos en adopción</Titulo>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {state.map((row,index) => 
                        row.tipo == "gato" &&
                        <Card url={"/adoptar-gato-almeria/" + row.id} imagen={row.imagen} alt={row.alt} tipo={row.tipo} nombre={row.nombre} descripcion={row.descripcion}></Card>
                    )}
                </div>
            </main>
            
            <Footer></Footer>

        </div>
    );
}
export default Gatos;