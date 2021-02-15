function gerarNumeros(qtde){
    let numeros = []
    let min = 1
    let max = 10
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
    }while(i < qtde)
    // for(let i = 0; i < qtde; i++){
    //     let sorteado = parseInt(Math.random() * (max - min)) + min;
    //     if(i === 0){
    //         numeros[i] = sorteado
    //     }else{
    //         for(let j = 0; j <= numeros.length; j++){

    //         }
    //     }
    //     console.log(numeros.length)
        
    // }

    return numeros
}

console.log(gerarNumeros(6))