import React, { useState, useEffect } from "react";
import "./style.css";
import Nav from "../../Components/Nav/Nav";
import axios from 'axios';

function Termos () {
    const [termDescription, setTermDescription] = useState('');
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
    

    useEffect(() => {
        const fetchTermDescription = async () => {
            try {
                const response = await axios.get('https://centroeuropeuhomolog.belogic.com.br/api/term-conditions/list');
                
                if (response.data && Array.isArray(response.data.term)) {
                    // Encontra o termo com id igual a 1
                    const termo = response.data.term.find(term => term.id === 3);

                    if (termo) {
                        setTermDescription(termo.description);
                    } else {
                        console.error('Termo de uso com id 1 não encontrado');
                    }
                } else {
                    console.error('Resposta inválida da API: nenhum termo encontrado');
                }
            } catch (error) {
                console.error('Erro ao buscar termos de uso:', error.message);
            }
        };

        fetchTermDescription();
    }, []);

    return (
        <div>
            <Nav/>
            <div className="banner" style={{
        backgroundImage: `url(${bannerUrl})`,
       
      }}>
        <h2 className="banner-h2" style={{color: "black"}}>
          Termos de Uso
        </h2>
      </div>
            <div className="lgpd-container">
                <div className="term-description">
                    
                        <p>{termDescription}</p>
                    </div>
                </div>
        </div>
    )
}

export default Termos;
