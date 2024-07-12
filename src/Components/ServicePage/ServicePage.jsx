import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const ServicePage = () => {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios.get(
          "https://centroeuropeuhomolog.belogic.com.br/api/service/list",
          { headers }
        );
        const servicosData = response.data.services.data;

        // Atualiza a lista de serviços com os detalhes necessários
        const servicosWithDetails = servicosData.map((servico) => ({
          ...servico,
          imageUrl: servico.photos.length > 0 ? servico.photos[0].public_path : null
        }));

        setServicos(servicosWithDetails);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    };

    fetchServicos();
  }, []);

  const handleRedirect = (url) => {
    window.open(url, "_blank"); // Abre a URL em uma nova aba
  };

  return (
    <div className="servicos-container2">

      <div className="servicos-grid">
        {servicos.map((servico) => (
          <div key={servico.id} className="servico-card">
            {servico.imageUrl ? (
              <img
                className="servico-image"
                src={servico.imageUrl}
                alt={servico.name}
              />
            ) : (
              <div className="placeholder-image">Imagem não disponível</div>
            )}
            <div className="servico-info">
              <h2 className="servico-name">{servico.name}</h2>
              <p className="servico-description">{servico.description}</p>
              <p className="servico-price">Preço: R$ {servico.price}</p>
              <button
                className="servico-button"
                onClick={() => handleRedirect(servico.hotmart_url)}
              >
                Contratar serviço
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
