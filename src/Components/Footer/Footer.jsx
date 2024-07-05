import React from "react";
import "./style.css";
import logo from "../../assets/Home/logo-home.png";
import face from "../../assets/Home/face.png";
import insta from "../../assets/Home/instagram.png";
import ytb from "../../assets/Home/ytb0.png";

function Footer () {
    return(
        <div className="footer">
            <img className="footer-logo" alt="" src={logo} />
            
            <div className="footer-endereco">
                <p className="endereco">R. Benjamin Lins, 999 - Batel | Curitiba | 41 3233 6669</p>
                <p className="email">relacionamento@centroeuropeu.com.br</p>
            </div>
            
            <div className="footer-sociais">
                <img alt="" src={face} />
                <img alt="" src={insta} />
                <img alt="" src={ytb} />
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
                    <li>LGPD</li>
                    <li>Política de Privacidade</li>
                    <li>Termos de Uso</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;