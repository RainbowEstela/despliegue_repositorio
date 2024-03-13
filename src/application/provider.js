import React, { useState, createContext,useEffect } from "react";
import imagenes from "./img"

const Provider = ({ children }) => {
    const [state, setState] = useState([
        {
            "id":1,
            "nombre":"Rex",
            "tipo":"perro",
            "descripcion": "Rex es un perro muy tranquilo y docil. Tiene 7 años pero quiere encontrar un hogar donde le quieran",
            "imagen":imagenes.rex,
            "alt":"imagen de perro en adopcion de Rex",
        },
        {
            "id":14,
            "nombre":"Pipo",
            "tipo":"perro",
            "descripcion": "Pipo es un buen perro. Tiene 3 años",
            "imagen":imagenes.pipo,
            "alt":"imagen de perro en adopcion de pipo",
        },
        {
            "id":2,
            "nombre":"Olga",
            "tipo":"perro",
            "descripcion": "Olga es un perro de raza. Tiene 5 años",
            "imagen":imagenes.olga,
            "alt":"imagen de perro en adopcion de Olga",
        },
        {
            "id":3,
            "nombre":"Lulu",
            "tipo":"perro",
            "descripcion": "Lulu es un cachorro aún muy juguetón. Tiene 6 meses",
            "imagen":imagenes.lulu,
            "alt":"imagen de perro en adopcion de Lulu",
        },
        {
            "id":4,
            "nombre":"Lolo",
            "tipo":"perro",
            "descripcion": "Lolo es un mestizo de bulldozer es un poco agresivo, no es un perro para todo el mundo. Tiene 8 años",
            "imagen":imagenes.lolo,
            "alt":"imagen de perro en adopcion de Lolo",
        },
        {
            "id":5,
            "nombre":"Leo",
            "tipo":"perro",
            "descripcion": "Leo es un perro muy cusioro, es muy probable que se perdiera en vez de que le abandonarán. Tiene 5 años",
            "imagen":imagenes.leo,
            "alt":"imagen de perro en adopcion de Leo",
        },
        {
            "id":6,
            "nombre":"Dina",
            "tipo":"perro",
            "descripcion": "Dina es una pastora alemán que le encanta jugar y muy fiel. Tiene 4 años",
            "imagen":imagenes.dina,
            "alt":"imagen de perro en adopcion de Dina",
        },
        {
            "id":7,
            "nombre":"Blacky",
            "tipo":"gato",
            "descripcion": "Blacky es una gata negra muy cariñosa. Tiene 7 años, requerimos de una entrevista al interesado/a antes de darla en adopción",
            "imagen":imagenes.blacky,
            "alt":"imagen de gato en adopcion de Blacky",
        },
        {
            "id":8,
            "nombre":"Grahja",
            "tipo":"gato",
            "descripcion": "Grahja es un pequeño gato muy juguetón y cariñoso. Tiene 4 meses",
            "imagen":imagenes.grahja,
            "alt":"imagen de gato en adopcion de Grahja",
        },
        {
            "id":9,
            "nombre":"Manchitas",
            "tipo":"gato",
            "descripcion": "Manchitas es un gato muy dormilón. Tiene 4 años",
            "imagen":imagenes.manchitas,
            "alt":"imagen de gato en adopcion de Manchitas",
        },
        {
            "id":10,
            "nombre":"Mina",
            "tipo":"gato",
            "descripcion": "Mina es un gato que no da muchos problemas y va a su rollo. Tiene 3 años",
            "imagen":imagenes.mina,
            "alt":"imagen de gato en adopcion de Mina",
        },
        {
            "id":11,
            "nombre":"Miso",
            "tipo":"gato",
            "descripcion": "Miso es una gata negra muy cariñosa. Tiene 7 años, requerimos de una entrevista al interesado/a antes de darla en adopción",
            "imagen":imagenes.miso,
            "alt":"imagen de gato en adopcion de Miso",
        },
        {
            "id":12,
            "nombre":"Puffy",
            "tipo":"gato",
            "descripcion": "Puffy es un gato muy listo y aprende rapido que no tiene que hacer cuando se le regaña. Tiene 5 años",
            "imagen":imagenes.puffy,
            "alt":"imagen de gato en adopcion de Puffy",
        },
        {
            "id":13,
            "nombre":"Ystola",
            "tipo":"gato",
            "descripcion": "Ystola es una gata siamesa preciosa y super cariñosa en busca de una familia. Tiene 9 años",
            "imagen":imagenes.ystola,
            "alt":"imagen de gato en adopcion de Ystola",
        },
    ]);

    return (
      <div>
        <AppContext.Provider value={[state, setState]}>
          {children}
        </AppContext.Provider>
      </div>
    );
  };


export default Provider;
export const AppContext= createContext()