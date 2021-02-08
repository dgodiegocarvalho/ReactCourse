import "./App.css";
import React from "react";

//import Card from "./components/layout/Card";

import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <Aleatorio min={1} max={60} />
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>
)