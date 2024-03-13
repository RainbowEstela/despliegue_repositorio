import React from "react";
import { Link , useParams} from "react-router-dom";
import { Header } from "../../components/header";
import { BreadContainer,BreadPiece,BreadDesactive } from "../../components/breadcrumb";
import { Card } from "../../components/card";
import { Titulo } from "../../components/textos";

function Perros() {
    document.title = "Refugio second chance - adoptar perros Almería"
    document.querySelector("meta[name='description']").content="Aquí podrá adoptar perros en Almería, tenemos un listado de nuestos perros en busca de una nueva familia.";

    return (
        <div>
            <Header></Header>

            <BreadContainer>
                <BreadDesactive>perros</BreadDesactive>
            </BreadContainer>
            


            <main className="py-5 px-8 bg-gray-100">
                <Titulo>Perros en adopción</Titulo>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <Card alt={"imagen de perro en adopcion de Rex"} tipo={"perro"} nombre={"Rex"} descripcion={"Rex es un perro muy tranquilo y docil. Tiene 7 años pero quiere encontrar un hogar donde le quieran"}></Card>
                </div>
            </main>
        </div>
    );
}
export default Perros;