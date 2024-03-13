import React from "react";
import { Link } from "react-router-dom";
import { BotonMarron } from "./botones";
import { Titulo } from "./textos";

export const Card = ({tipo,hora,descripcion,nombre,imagen,children,url,alt}) =>
<div className="bg-white p-6 rounded-lg flex flex-col border-2  border-amber-200 ">
    <div>
        <img className="h-40 rounded w-full object-cover object-center mb-6" src={imagen} alt={alt}></img>
        <h2 className="tracking-widest text-rose-600 text-xs font-medium title-font">{tipo}</h2>
        <h3 className="text-lg text-gray-900 font-medium title-font mb-4">{nombre}</h3>
        <p className="leading-relaxed text-base">{descripcion}</p>
        {children}
    </div>
    <div className="mt-4 flex items-end justify-center grow">
        <Link to={url}><BotonMarron>Detalles</BotonMarron></Link>
    </div>
</div>


export const Hero = ({imagen,nombre,tipo,descripcion,children,alt,url}) => 
<section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap xl:items-center">
            <img src={imagen} alt={alt} className="lg:w-1/2 w-full lg:h-auto xl:max-h-96 h-64 object-cover object-center rounded"></img>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mb-0">
                <h2 className="text-sm title-font tracking-widest text-blue-500">{tipo}</h2>
                <Titulo>{nombre}</Titulo>
                <p className="leading-relaxed mb-4 text-gray-900">{descripcion}</p>


                <div className="border-b border-gray-200 mb-6">
                    {children}
                </div>
                <div className="flex">
                   
                    <div className="ml-auto">
                        <Link to={url}><BotonMarron>Volver</BotonMarron></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

export const HeroSection = ({dato,valor}) =>
<div className="flex border-t border-gray-200 py-2">
    <span className="text-gray-900">{dato}</span>
    <span className="ml-auto text-amber-600">{valor}</span>
</div>