import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório" color="#070">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#260126">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color="#59323C">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro" color="#F2EEB3">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)