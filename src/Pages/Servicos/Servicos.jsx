import React, { useState, useEffect } from "react";
import "./style.css";
import Nav from "../../Components/Nav/Nav";
import ServicePage from "../../Components/ServicePage/ServicePage";
import axios from 'axios';

function Servicos() {
  const [bannerUrl, setBannerUrl] = useState('');

  useEffect(() => {
    const fetchBannerImage = async () => {
      try {
        const response = await axios.get('https://centroeuropeuhomolog.belogic.com.br/api/banner');
        const { banner } = response.data;

        // Verifica se há banner na resposta
        if (banner && banner.bannerUrl) {
          setBannerUrl(banner.bannerUrl);
        } else {
          console.error('Erro: Nenhum banner encontrado na resposta da API');
        }
      } catch (error) {
        console.error('Erro ao buscar imagem do banner:', error.message);
      }
    };

    fetchBannerImage();
  }, []);

  return (
    <div>
        <Nav/>
        <div className="banner" style={{
        backgroundImage: `url(${bannerUrl})`,
       
      }}>
        <h2 className="banner-h2" style={{color: "black"}}>
          Serviços
        </h2>
      </div>
        <div className="todosprodutos">
          <ServicePage />
        </div>
    </div>
  );
}

export default Servicos;
