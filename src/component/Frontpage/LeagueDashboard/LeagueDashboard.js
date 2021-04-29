import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import League from './League/League';
import './LeagueDashboard.css';
const LeagueDashboard = () => {
    const [league, setLeague] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England')
            .then(res => res.json())
            .then(data => setLeague(data.countrys))
    }, [])
    return (
        <div className="league-dashboard">
            <Header></Header>
            <Container>
                <Row className='row'>
                        {
                            league.map(league => <League league={league} key={league.idLeague}></League>)
                        }
                </Row>
            </Container>
        </div>
    );
};

export default LeagueDashboard;