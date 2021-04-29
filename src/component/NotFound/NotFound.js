import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound">
            <div className="notfound-header">
                <p>oopps!</p>
                <Link to='/home'><p className="notfound-cross">X</p></Link>
            </div>
            <div className="notfound-body">
                <div className="error-icon">
                    <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
                </div>
                <div className="error-details">
                    <h3>Error: 404</h3>
                    <h4>Page Not Found</h4>
                </div>
            </div>
            <br/>
            <Link to="/home"><button className='btn btn-default notfound-btn'>Go to Homepage..</button></Link>
        </div>
    );
};

export default NotFound;