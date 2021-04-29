import { faFlag, faFootballBall, faLocationArrow, faPassport, faTransgender } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ShowLeagueDetails.css';
import MaleImg from '../../../image/male.png'
import FemaleImg from '../../../image/female.png'

const ShowLeagueDetail = (props) => {

    const { strLeague, intFormedYear, strCountry, strSport, strGender } = props.league;
    
    //Set Condition Image for Male or Female
    let setconditionImg;
    if (strGender=='Male') {
        setconditionImg =<img src={MaleImg} alt=""/>
    }
    else{
        setconditionImg =<img src={FemaleImg} alt=""/>
    }
    
    return (
        <div className="league-details">
            <div className="details">
                <h2>{strLeague}</h2>
                <p><FontAwesomeIcon icon={faLocationArrow} />  <strong>Founded:</strong> {intFormedYear}</p>
                <p><FontAwesomeIcon icon={faFlag} /><strong>  Country:</strong> {strCountry}</p>
                <p><FontAwesomeIcon icon={faPassport} /><strong>  Sport Type:</strong> {strSport}</p>
                <p><FontAwesomeIcon icon={faTransgender} />  <strong>Gender:</strong> {strGender}</p>
            </div> 
            <div className="condition-image">
                {setconditionImg}
            </div>
        </div>
    );
};

export default ShowLeagueDetail;