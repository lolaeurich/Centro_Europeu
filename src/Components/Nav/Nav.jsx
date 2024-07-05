import React, { useState } from "react";
import "./style.css";
import logoHome from "../../assets/Home/logo-home.png";
import face from "../../assets/Home/face.png";
import insta from "../../assets/Home/instagram.png";
import ytb from "../../assets/Home/ytb0.png";
import partner from "../../assets/Home/partner.png";

function Nav ({ openPartnerPopup }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleOpenPartnerPopup = () => {
        openPartnerPopup(true);
    };

    return(
        <div className="nav">
            <img className="nav-logo" alt="" src={logoHome} />
            <div className="nav-sanduiche" onClick={toggleDropdown}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>  
            <div className="nav-menu-desktop">
                <ul className="desktop-menu-list">
                    <li>Gastronomia</li>
                    <li>Idiomas</li>
                    <li>Estilo</li>
                    <li>Negócios</li>
                    <li>Audiovisual</li>
                    <li>Design</li>
                </ul>
            </div>   
            <button className="parceiro-btn" onClick={handleOpenPartnerPopup}>
                Indique um parceiro <img alt="" src={partner}/>
            </button> 
            {isDropdownOpen && (
            <div className="dropdown">
                <button className="close-button" onClick={closeDropdown}>X</button>
                <ul className="dropdown-list">
                    <li>Gastronomia</li>
                    <li>Idiomas</li>
                    <li>Estilo</li>
                    <li>Negócios</li>
                    <li>Audiovisual</li>
                    <li>Design</li>
                </ul>
                <div className="sociais">
                    <img alt="" src={face}/>
                    <img alt="" src={insta} />
                    <img alt="" src={ytb} />
                </div>
            </div>
            )}  
        </div>
    )
}

export default Nav;
