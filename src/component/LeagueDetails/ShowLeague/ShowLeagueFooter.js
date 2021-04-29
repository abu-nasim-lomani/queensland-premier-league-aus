import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ShowLeagueFooter.css';
import { FaBlog, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ShowLeagueFooter = (props) => {
    const {strYoutube, strWebsite, strTwitter}=props.league;

    return (
        <div className='social-icon'>
           <Link to={strTwitter} target="_blank"><FaTwitter className='icon middle'/></Link>
           <Link to={strWebsite} target="_blank"><FaBlog className='icon middle'/></Link>
           <Link to={strYoutube} target="_blank"><FaYoutube className='icon'/></Link>
       </div>
    );
};

export default ShowLeagueFooter;