import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Layouts/Header'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Container>
                <h3>Personajes de Rick and Morty</h3>
                <Row>
                    {
                        characters.map((character) => {
                            return (
                                <Col >
                                    <Card 
                                        key={character.id}
                                        characterDescription={character.description} 
                                        image={character.image}
                                        characterId={character.id} 
                                        characterName={character.name} 
                                        
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Home