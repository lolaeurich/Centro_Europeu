import React, { useState, useEffect } from "react";
import "./style.css";
import logoHome from "../../assets/Home/logo-home.png";
import faceIcon from "../../assets/Home/face.png";
import instaIcon from "../../assets/Home/instagram.png";
import ytbIcon from "../../assets/Home/ytb0.png";
import partner from "../../assets/Home/partner.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Nav ({ openPartnerPopup }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://centroeuropeuhomolog.belogic.com.br/api/category/list');
                
                // Verifica se a resposta contém categorias
                if (response.data && response.data.categories && Array.isArray(response.data.categories)) {
                    // Filtra apenas as categorias com detach true
                    const filteredCategories = response.data.categories.filter(category => category.detach === true);
                    setCategories(filteredCategories);
                } else {
                    console.error('Erro: Response.data não contém categorias válidas.', response.data);
                }
            } catch (error) {
                console.error('Erro ao buscar categorias:', error.message);
            }
        };

        fetchCategories();
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleOpenPartnerPopup = () => {
        openPartnerPopup(true);
    };

    const handleHome = () => {
        navigate("/");
    };

    return (
        <div className="nav">
            <img className="nav-logo" alt="" src={logoHome} onClick={handleHome}/>
            <div className="nav-sanduiche" onClick={toggleDropdown}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>  
            <div className="nav-menu-desktop">
                <ul className="desktop-menu-list">
                    {categories.map(category => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </div>   
            <button className="parceiro-btn" onClick={handleOpenPartnerPopup}>
                Indique um parceiro <img alt="" src={partner}/>
            </button> 
            {isDropdownOpen && (
            <div className="dropdown">
                <button className="close-button" onClick={closeDropdown}>X</button>
                <ul className="dropdown-list">
                    {categories.map(category => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
                <div className="sociais">
                    <a href="https://www.facebook.com/centroeuropeu" target="_blank" rel="noopener noreferrer">
                        <img alt="Facebook" src={faceIcon}/>
                    </a>
                    <a href="https://www.instagram.com/centroeuropeubr/" target="_blank" rel="noopener noreferrer">
                        <img alt="Instagram" src={instaIcon} />
                    </a>
                    <a href="https://www.youtube.com/user/CentroEuropeuCtba" target="_blank" rel="noopener noreferrer">
                        <img alt="YouTube" src={ytbIcon} />
                    </a>
                </div>
            </div>
            )}  
        </div>
    )
}

export default Nav;
