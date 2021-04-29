import React from 'react';
import './ShowLeagueHeader.css'

const ShowLeagueHeader = (props) => {
    const {strBanner, strLogo}=props.league;
    return (
        <div >
            <img src={strBanner} alt="" style={{width:'100%', height:'200px'}}/>
            
        </div>
    );
};

export default ShowLeagueHeader;