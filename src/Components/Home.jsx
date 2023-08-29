import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import { Link } from 'react-router-dom'
function Home() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then((response) => {
            setCharacters(response.data.results)
        })
    }, [characters])
    return (
        <>
            <Header name="Inicio" />
            {
                characters.map((character) => {
                    return (
                        <Link key={character.id} to={`/character/${character.id}`}>
                            <h4>{character.name}</h4>
                            <img src={character.image} />
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Home