import React from "react";
import { Logo } from "./header";

export const Footer = _ =>
<footer className="text-gray-600 body-font border-t-2">
  <div className="container px-5 py-10 mx-auto flex items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col bg-white">
    <div className="w-64 flex flex-col items-center md:items-start">
      <Logo></Logo>
      <p className="mt-2 text-sm text-gray-500">Ayudando animales desde 2001</p>
    </div>
     
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <FooterCategory titulo={"Redes Sociales"}>
        <FooterEnlace>Facebook</FooterEnlace>
        <FooterEnlace>Instragram</FooterEnlace>
        <FooterEnlace>Twitter</FooterEnlace>
        <FooterEnlace>Youtube</FooterEnlace> 
      </FooterCategory>

      <FooterCategory titulo={"Acerca de nosotros"}>
        <FooterEnlace>Noticias</FooterEnlace>
        <FooterEnlace>Blog</FooterEnlace>
        <FooterEnlace>Nuestra Historia</FooterEnlace>
        <FooterEnlace>Colaboradores</FooterEnlace> 
      </FooterCategory>

      <FooterCategory titulo={"Soporte"}>
        <FooterEnlace>Terminos de servicio</FooterEnlace>
        <FooterEnlace>Política de privacidad</FooterEnlace>
        <FooterEnlace>Mapa del sitio</FooterEnlace>
        <FooterEnlace>Preguntas frecuente</FooterEnlace> 
      </FooterCategory>

      <FooterCategory titulo={"Contacto"}>
        <FooterEnlace>Teléfono: 699 99 99</FooterEnlace>
        <FooterEnlace>Correo: refugio_second_chance@contacto.com</FooterEnlace>
        <FooterEnlace>Dirección: Avenida meditarreaneo nº4, Almeria, 06420</FooterEnlace>
      </FooterCategory>
    </div>
  </div>
  <div className="bg-amber-200">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-800 text-sm text-center sm:text-left">© 2024 Estela Iniesta Ruiz</p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-orange-800">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-orange-800">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-orange-800">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-orange-800">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

export const FooterCategory = ({children,titulo}) => <div className="lg:w-1/4 md:w-1/2 w-full px-4">
<h2 className="title-font font-medium text-gray-900 tracking-widest text-md mb-3 font-semibold">{titulo}</h2>
<nav className="list-none mb-10">
  {children}
</nav>
</div>

export const FooterEnlace = ({children}) => <li>
<p className="text-gray-600 text-sm py-1 hover:text-gray-800">{children}</p>
</li>


