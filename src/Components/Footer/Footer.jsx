import React from "react";
import "./style.css";
import logo from "../../assets/Home/logo-home.png";
import faceIcon from "../../assets/Home/face.png";
import instaIcon from "../../assets/Home/instagram.png";
import ytbIcon from "../../assets/Home/ytb0.png";
import { useNavigate } from "react-router-dom";

function Footer () {
    const navigate = useNavigate();

    const handleLGPD = () => {
        navigate("/LGPD");
    };

    const handlePolitica = () => {
        navigate("/PoliticaDePrivacidade");
    };

    const handleTermos = () => {
        navigate("/Termos");
    };

    return(
        <div className="footer">
            <img className="footer-logo" alt="" src={logo} />
            
            <div className="footer-endereco">
                <p className="endereco">R. Benjamin Lins, 999 - Batel | Curitiba | 41 3233 6669</p>
                <p className="email">relacionamento@centroeuropeu.com.br</p>
            </div>
            
            <div className="footer-sociais">
                <a href="https://www.facebook.com/centroeuropeu" target="_blank" rel="noopener noreferrer">
                    <img alt="Facebook" src={faceIcon} />
                </a>
                <a href="https://www.instagram.com/centroeuropeubr/" target="_blank" rel="noopener noreferrer">
                    <img alt="Instagram" src={instaIcon} />
                </a>
                <a href="https://www.youtube.com/user/CentroEuropeuCtba" target="_blank" rel="noopener noreferrer">
                    <img alt="YouTube" src={ytbIcon} />
                </a>
            </div>

            <div className="footer-menu">
                <ul>
                    <li>Gastronomia</li>
                    <li>Idiomas</li>
                    <li>Estilo</li>
                    <li>Negócios</li>
                    <li>Audiovisual</li>
                    <li>Design</li>
                </ul>
            </div>

            <p className="footer-centro">O Centro Europeu</p>

            <button className="footer-btn">Cadastre-se no marketplace</button>

            <div className="footer-termos">
                <ul>
                    <li onClick={handleLGPD}>LGPD</li>
                    <li onClick={handlePolitica}>Política de Privacidade</li>
                    <li onClick={handleTermos}>Termos de Uso</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
