import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function BasicExample(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.characterName}</Card.Title>
                <Card.Text>
                    {props.characterDescription}
                </Card.Text>
                <Link to={`/character/${props.characterId}`}><Button variant="primary">Ver Personaje</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;