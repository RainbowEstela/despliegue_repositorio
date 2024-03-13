import React, { useContext } from "react";
import { Link , useParams} from "react-router-dom";
import { Header } from "../../components/header";
import { BreadContainer, BreadDesactive, BreadPiece } from "../../components/breadcrumb";
import { Footer } from "../../components/footer";
import { Hero, HeroSection } from "../../components/card";
import { AppContext } from "../../application/provider";

function DetallePerro() {
    document.title = "Refugio second chance - adoptar perro detalle"
    // como esta pagina no se intenta posicionar dejo la meta descripcion vacia
    document.querySelector("meta[name='description']").content="";


    const id = useParams()
    const [state, setState] = useContext(AppContext);
    let perro = null;

    for (const key in state) {
        if (state[key].id == id.id && state[key].tipo == "perro") {
            
            perro = state[key];
        }
    }

    return(
        <div>
            
            <Header></Header>
            <BreadContainer>
                <BreadPiece link={"/adoptar-perro-almeria"}>Perros</BreadPiece>
                <BreadDesactive>Detalle</BreadDesactive>
            </BreadContainer>
            
            <main className="py-5 px-8 bg-white">
                {perro && 
                <Hero url={"/adoptar-perro-almeria"} nombre={perro.nombre} alt={perro.alt} imagen={perro.imagen} descripcion={perro.descripcion}>
                    <HeroSection dato={"Teléfono"} valor={"655 55 55 55"}></HeroSection>
                    <HeroSection dato={"Email"} valor={"adopta_second_chance@gmail.com"}></HeroSection>
                </Hero>}
                
            </main>
            
            <Footer></Footer>

        </div>
    );

}

export default DetallePerro;