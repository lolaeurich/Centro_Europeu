import React from 'react';
import "./style.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import foneImage from '../../assets/Products/fone.jpg';

const ServicesCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],
    // Adicione propriedades de estilo conforme necessário
    slideStyle: {
      margin: '0 10px', // Espaçamento entre os slides
      textAlign: 'center',
      height: "450px"
    },
    centerMode: false, // Modo de centralização desativado para evitar distorções
    centerPadding: '0', // Padding central desativado para evitar distorções
  };

  return (
    <div className='servicos-container'>
      <h2 className='servicos-titulo'>Serviços em Destaque</h2>
      <Slider className='servicos-slider' {...settings}>
        {products.map((product) => (
          <div className='servicos-lista' key={product.id}>
            <img className='servicos-imagens' src={product.image} alt={product.name}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesCarousel;
