import React from "react";
import { Link , useParams} from "react-router-dom";
import { Header } from "../../components/header";
import { BreadContainer } from "../../components/breadcrumb";
import refugio from "../../imgs/refugio.jpg"
import { Footer } from "../../components/footer";

function Home() {
    document.title = "Refugio second chance - home"// titulo posicionado por marca
    // meta descripción usando las palabras clave de la url home
    document.querySelector("meta[name='description']").content="Second Chance es un refugio animal en Almería que intenta ser temporalmente el hogar de animales abandonados en busca de un nuevo amigo.";
    return (
        <div>
            <Header></Header>
            <div className="h-64 lg:h-96 overflow-hidden relative">
                <img alt="content" className="object-cover object-center h-full w-full" src={refugio}></img>
                <div className="absolute top-0 left-0 bg-amber-300 opacity-70 w-full h-full text-center flex items-center"></div>
                <div className="absolute top-0 left-0 text-center flex items-center justify-center w-full h-full ">
                    <h1 className="text-2xl md:text-4xl text-gray-900 font-semibold">Hogar temporal de mascotas abandonadas</h1>
                </div>
            </div>
            <BreadContainer></BreadContainer>
            <main className="py-14 px-8 bg-gray-100">
                <div className="mx-auto md:w-2/3">
                <h2 className="text-4xl mb-4 font-medium text-amber-900 decoration-2">¿Quienes somos?</h2>
                <p className="text-2xl">El refugio Second Chance es un refugio de animales en la región de Almería, nuestra tarea es la de dar un horgar temporal a mascotas abandonadas hasta que encuentren una familia que les quiera.</p>
                <h2 className="text-4xl mb-4 mt-8 font-medium text-amber-900 decoration-2">¿Nuestro origen?</h2>
                <p className="text-2xl">Somos una familia con mucho aprecio a los animales. Cansados de ver animales en necesidad o atropellados por las calles, decidimos montar nuestro propio refugio de animales abandonados para intentar evitar que vuelvan a ocurrir esas escenas.</p> 
                </div>
            </main>

            <Footer></Footer>

        </div>
    );
}
export default Home;