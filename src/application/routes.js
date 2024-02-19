import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Formaulario from "../pages/formulario";
import Detalle from "../pages/detalle";
import Perros from "../pages/perros";
import Gatos from "../pages/gatos";

export const Rutas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/formulario" element={<Formaulario/>}/>
            <Route exact path="/detalle" element={<Detalle/>}/>
            <Route exact path="/perros" element={<Perros/>}/>
            <Route exact path="/gatos" element={<Gatos/>}/>
        </Routes>
    </BrowserRouter>
);