import React from 'react';
import './League.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const League = (props) => {
    // console.log(props.league);
    const { strLeague, strLogo, idLeague} = props.league;
    return (
            <Card className='card'>
                <Card.Img variant="top" src={strLogo} style={{padding:'10px'}}/>
                <Card.Body>
                    <Card.Title style={{color:'oldlace'}}>{strLeague}</Card.Title>
                    <Card.Text>
                        Sport Type: <small><b>Soccer</b></small>
                    </Card.Text>
                    <Link to={`/explore/${idLeague}`}><Button style={{backgroundColor:'tomato'}}>Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </Button></Link>
                </Card.Body>
            </Card>
    );
};

export default League;