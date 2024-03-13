import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Perros from "../pages/perros";
import Gatos from "../pages/gatos";
import DetallePerro from "../pages/detalle-perro";
import DetalleGato from "../pages/detalle-gato";

export const Rutas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/adoptar-perro-almeria" element={<Perros/>}/>
            <Route exact path="/adoptar-gato-almeria" element={<Gatos/>}/>
            <Route path="/adoptar-perro-almeria/:id" element={<DetallePerro></DetallePerro>}></Route>
            <Route path="/adoptar-gato-almeria/:id" element={<DetalleGato></DetalleGato>}></Route>
        </Routes>
    </BrowserRouter>
);