import logo from './logo.svg';
import './App.css';
import { useRef,useEffect,useState } from 'react';
import { Rutas } from './application/routes';


function App() {

  const miId = useRef("miqota");

  const consultarId = () => alert(miId.current.innerHTML);

  return (

  
    <Rutas/>
    
  );
}

export default App;
