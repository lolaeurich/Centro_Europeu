import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ProductCarousel = ({ onFirstProductClick }) => {
  const [products, setProducts] = React.useState([]);
  const [hasShownPopup, setHasShownPopup] = React.useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'https://centroeuropeuhomolog.belogic.com.br/api/product/list'
      );
      const productsData = response.data.products.data;

      // Filtra apenas os produtos com detach = true
      const detachedProducts = productsData.filter(product => product.detach);

      setProducts(detachedProducts);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

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
      columnGap: "5px"
    },
    centerMode: false,
    centerPadding: '0',
  };

  const navigate = useNavigate();

  const handleProd = () => {
    navigate('/Produtos');
  };

  const handleClickProduct = () => {
    if (!hasShownPopup) {
      onFirstProductClick();
      setHasShownPopup(true);
    }
  };

  return (
    <div className='produtos-container'>
      <h2 className='produtos-titulo'>Produtos em Destaque</h2>
      <Slider {...settings} className='produtos-slider'>
        {products &&
          products.map((product) => (
            <div className='produtos-lista' key={product.id}>
              {product.photos && product.photos.length > 0 ? (
                <a
                  href={product.hotmart_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={handleClickProduct} // Adiciona o onClick para cada produto
                >
                  <img
                    className='produtos-imagens'
                    src={product.photos[0].public_path}
                    alt={product.name}
                  />
                </a>
              ) : (
                <p>Imagem não disponível</p>
              )}
            </div>
          ))}
      </Slider>
      <div className='classe-btn-produtos'>
        <button className='produtos-btn' onClick={handleProd}>
          Ver todos os produtos
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
