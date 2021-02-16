import React, { Component } from 'react'
import Display from './Display'
import Form from './Form'
import Botao from './Botao'

class Mega extends Component{
    state = {
        numeros: this.props.numeros || [],
        qtde: this.props.qtde || 6
    }

    gerarNumeros(){
        let numeros = []
        let min = 1
        let max = 60
        let i = 0

        do {
            let sorteado = parseInt(Math.random() * (max - min)) + min;
            
            if(i > 0){
                let repetido = numeros.includes(sorteado)
                while(repetido){
                    console.log(repetido, sorteado)
                    sorteado = parseInt(Math.random() * (max - min)) + min;
                    repetido = numeros.includes(sorteado)
                }
                numeros[i] = sorteado
            }else{
                numeros[i] = sorteado
            }
            i++
        }while(i < this.state.qtde)

        return numeros
    }

    setNumeros = () => {
        let novonumeros = this.gerarNumeros()
        this.setState({
            numeros: novonumeros
        })
    }

    setQtde = (novoqtde) => {
        this.setState({
            qtde: novoqtde
        })
    }

    render() {
        return (
            <div>
                <h2>Gerador de numeros</h2>
                <Display numeros={this.state.numeros}/>
                <Form qtde={this.state.qtde} setQtde={this.setQtde} />
                <Botao setNumeros={this.setNumeros}/>
            </div>
        )
    }
}

export default Mega