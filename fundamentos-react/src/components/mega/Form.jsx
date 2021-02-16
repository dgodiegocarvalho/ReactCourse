import React from 'react'

export default props => {
    return(
        <div>
            <label htmlFor="qtdeinput">Quantidade de números: </label>
                <input 
                    id="qtdeinput" 
                    type="number" 
                    value={props.qtde} 
                    onChange={e => props.setQtde(+e.target.value)}  />
        </div>
        
    )
}