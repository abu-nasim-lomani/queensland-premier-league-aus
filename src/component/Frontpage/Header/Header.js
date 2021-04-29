import React from 'react';
import { Image } from 'react-bootstrap';
import banner from '../../../image/Logo-slides-web.jpg';
import logo from '../../../image/Brand-Web-Logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header-image center">
           <div className="league-logo center">
               <img src={logo} alt="" className="d-block mx-auto img-fluid"/>
           </div>
        </div>
    );
};

export default Header;