import React from 'react';
import "./style.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import foneImage from '../../assets/Products/fone.jpg';

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,

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
    <div className='produtos-container'>
      <h2 className='produtos-titulo'>Produtos em Destaque</h2>
      <Slider {...settings} className='produtos-slider'>
        {products.map((product) => (
          <div className='produtos-lista' key={product.id}>
            <img className='produtos-imagens' src={product.image} alt={product.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
