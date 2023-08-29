import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Character() {
    const params = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${params.id}`).then((response) => {
            setCharacter(response.data)
        })
    }, [])
    return (
        <div>
            <h4>{character.name}</h4>
            <img src={character.image} />
        </div>
    )
}

export default Character