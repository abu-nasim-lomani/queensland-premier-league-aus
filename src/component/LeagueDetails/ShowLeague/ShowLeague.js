import React from 'react';
import ShowLeagueDescription from './ShowLeagueDescription';
import ShowLeagueDetail from './ShowLeagueDetail';
import ShowLeagueFooter from './ShowLeagueFooter';
import ShowLeagueHeader from './ShowLeagueHeader';

const ShowLeague = (props) => {
    const league=props.detailLeague;
    
    return (
        <div style={{backgroundColor:'#0A5252'}}>
            <ShowLeagueHeader league={league}></ShowLeagueHeader>
            <div style={{width:'80%', margin:'30px auto'}}>
            <ShowLeagueDetail league={league}></ShowLeagueDetail>
            <ShowLeagueDescription league={league}></ShowLeagueDescription>
            <ShowLeagueFooter league={league}></ShowLeagueFooter>
            </div>
        </div>
    );
};

export default ShowLeague;