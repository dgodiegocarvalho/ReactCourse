import React, { cloneElement } from "react"

export default props => {
    console.log(typeof props.children)
    return (
        <div>
            {
                //dessa maneira ele espera um unico elemento
                //React.cloneElement(props.children, props)

                //assim ele trata multiplos elementos
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}