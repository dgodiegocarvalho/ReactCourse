import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from './components/comunicacao/IndiretaPai.jsx'
import Input from './components/formulario/Input.jsx'
import Contador from "./components/contador/Contador";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        {/* 
        Desafio surpresinha mega sena
        gerarNumeros(qtde) { [1, ... , qtde] } de 1 ateh 60
        input pra pedir a qtde de numeros e um botao pra iniciar o processo
        componente Mega dentro da pasta mega
        
        <div className="Cards">
            <Card titulo="#12 - Contador" color="#75EB00">
                <Contador numeroInicial={10}></Contador>
            </Card>
        </div> */}

        <div className="Cards">
            <Card titulo="#12 - Contador" color="#75EB00">
                <Contador numeroInicial={10}></Contador>
            </Card>
        </div>

        <div className="Cards">
            <Card titulo="#11 - Componente Controlado" color="#ADC4CC">
                <Input></Input>
            </Card>
        </div>

        <div className="Cards">
            <Card titulo="#10 - Comunicação Indireta" color="#588C73">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#F38630">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#E8B71A">
                <ParOuImpar numero={11}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                <UsuarioInfo usuario={{email: 'rer@nando.com'}}></UsuarioInfo>
                <UsuarioInfo />
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#35404F">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FFA200">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com filhos" color="#0087CB">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana"  />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
                <br />
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana"  />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

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