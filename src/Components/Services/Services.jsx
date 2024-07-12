import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServicesCarousel = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          'https://centroeuropeuhomolog.belogic.com.br/api/service/list'
        );
        const servicesData = response.data.services.data;

        // Filtra apenas os serviços com detach = true
        const detachedServices = servicesData.filter(service => service.detach);

        setServices(detachedServices);
      } catch (error) {
        console.error('Erro ao buscar serviços:', error);
      }
    };

    fetchServices();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Ajustei para mostrar apenas um serviço de cada vez
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
    slideStyle: {
      margin: '0 10px',
      textAlign: 'center',
      height: '450px',
      columnGap: '5px',
    },
    centerMode: false,
    centerPadding: '0',
  };

  const navigate = useNavigate();

  const handleServ = () => {
    navigate('/Servicos');
  };

  return (
    <div className='servicos-container3'>
      <h2 className='servicos-titulo'>Serviços em Destaque</h2>
      <Slider {...settings} className='servicos-slider'>
      {services &&
          services.map((service) => (
            <div className='produtos-lista' key={service.id}>
              {service.photos && service.photos.length > 0 ? (
                <a
                  href={service.hotmart_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='produtos-imagens'
                    src={service.photos[0].public_path}
                    alt={service.name}
                  />
                </a>
              ) : (
                <p>Imagem não disponível</p>
              )}
            </div>
          ))}
      </Slider>
      <div className='classe-btn-produtos'>
        <button className='servicos-btn' onClick={handleServ}>
          Ver todos os serviços
        </button>
      </div>
    </div>
  );
};

export default ServicesCarousel;
