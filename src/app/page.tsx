"use client";

import React from 'react';


import { Casorio} from "./components/casorio";
import { Sobre } from './components/sobre';
import Fotos from './components/imagens';
import { Padrinhos } from './components/padrinhos';
import {  Detalhes } from './components/calendario';
import { Sobrenos } from './components/sobrenos';
import { Presentes } from './components/presentes';
import { Separador } from './components/separador';
import { Restaurante } from './components/restaurante';


export default function Home() {

  return (
   <>
     <Casorio />
     <Sobre />
     <Fotos />
     <br /> <br />
      <Separador />
     <Padrinhos />
      <Separador />
     <Detalhes />
     <Separador />
     <Restaurante />
      <Separador />
     <Sobrenos />
      <Separador />
     <Presentes />
    
    </>
 
  );
}
