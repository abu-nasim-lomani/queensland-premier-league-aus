import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ShowLeague from './ShowLeague/ShowLeague';

const LeagueDetails = () => {
    const [findLeague, setFindLeague] =useState([]);
    const {idLeaguee}= useParams();

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeaguee}`)
            .then(res => res.json())
            .then(data => {
                const lgs=data.leagues;
                setFindLeague(lgs);
            })
           
    }, []);
                  
         
    return (
        <div>
            {
                findLeague.map(detail=><ShowLeague detailLeague={detail} key={detail.strLeague}></ShowLeague>)
            }
        </div>
    );
};

export default LeagueDetails;