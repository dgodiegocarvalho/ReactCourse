import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default props => {
    return(
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/param/123">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/legal">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/naoexiste">Não Existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}