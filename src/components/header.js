import React from "react";
import casita from '../../src/imgs/casita.png'
import { EnlaceHeader, EnlaceNav } from "./enlaces";

export const Header = _=>

<header className="text-gray-600 body-font bg-amber-200">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <EnlaceHeader link={'/'}>
            <img src={casita} alt="logo" className="w-10 h-10"/>
            <span class="ml-3 text-xl">Refugio Second Chance</span>
        </EnlaceHeader>

        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <EnlaceNav link={'/'}>Inicio</EnlaceNav>
        <EnlaceNav link={'/gatos'}>Gatos</EnlaceNav>
        <EnlaceNav link={'/perros'}>Perros</EnlaceNav>
        </nav>  
    </div>
</header>
