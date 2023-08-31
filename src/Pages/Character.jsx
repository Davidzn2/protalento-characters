import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../Layouts/Header'
import Card from '../Components/Card'

import Container from 'react-bootstrap/Container';
function Character() {
    const params = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${params.id}`).then((response) => {
            setCharacter(response.data)
        })
    }, [])
    return (
        <>
            <Header name={character.name}/>
            <Container>
                <Card
                    characterDescription={character.description}
                    image={character.image}
                    characterId={character.id}
                    characterName={character.name}
                />
            </Container>
        </>
    )
}

export default Character