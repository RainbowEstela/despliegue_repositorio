import React, { useContext } from "react";
import { Link , useParams} from "react-router-dom";
import { Header } from "../../components/header";
import { BreadContainer,BreadPiece,BreadDesactive } from "../../components/breadcrumb";
import { Card } from "../../components/card";
import { Titulo } from "../../components/textos";
import { AppContext } from "../../application/provider";
import { Footer } from "../../components/footer";

function Perros() {
    document.title = "Refugio second chance - adoptar perros Almería"
    document.querySelector("meta[name='description']").content="Aquí podrá adoptar perros en Almería, tenemos un listado de nuestos perros en busca de una nueva familia.";

    const [state, setState] = useContext(AppContext);

    return (
        <div>
            <Header></Header>

            <BreadContainer>
                <BreadDesactive>perros</BreadDesactive>
            </BreadContainer>
            


            <main className="py-5 px-8 bg-gray-100">
                <Titulo>Perros en adopción</Titulo>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {state.map((row,index) => 
                        row.tipo == "perro" &&
                        <Card url={"/adoptar-perro-almeria/" + row.id} imagen={row.imagen} alt={row.alt} tipo={row.tipo} nombre={row.nombre} descripcion={row.descripcion}></Card>
                    )}
                </div>
            </main>

            <Footer></Footer>
        </div>
    );
}
export default Perros;