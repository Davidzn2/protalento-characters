import React from 'react'
import { Link } from 'react-router-dom'
function Header(props) {
    return (
        <header>
            Estas en la pagina de: {props.name}
            <ul>
                <li><Link to="/verduras">Verduras</Link></li>
                <li><Link to="/frutas">Frutas</Link></li>
            </ul>
        </header>
    )
}

export default Header