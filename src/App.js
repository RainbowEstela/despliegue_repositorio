import logo from './logo.svg';
import './App.css';
import { useRef,useEffect,useState } from 'react';
import { Rutas } from './application/routes';
import Provider from './application/provider';

function App() {

  return (

    
    <Provider>
      <Rutas/>
    </Provider>
   
  );
}

export default App;
