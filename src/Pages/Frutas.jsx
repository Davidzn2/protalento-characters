import React from 'react'
import Header from '../Layouts/Header'

function Frutas() {
    const frutas = ['Manzana', 'Pera', 'Piña', 'Durazno']
    return (
        <div>
            <Header name="Frutas"/>
            <h2>Estas son mis frutas favoritas</h2>
            {
                frutas.map((fruta)=>{
                    return <p>{fruta}</p>
                })
            }
        </div>
    )
}

export default Frutas