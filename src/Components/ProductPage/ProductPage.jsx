import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios.get(
          "https://centroeuropeuhomolog.belogic.com.br/api/product/list",
          { headers }
        );
        const productsData = response.data.products.data;

        // Atualizamos a lista de produtos com a URL da primeira imagem e hotmart_url
        const productsWithDetails = productsData.map((product) => ({
          ...product,
          imageUrl: product.photos.length > 0 ? product.photos[0].public_path : null
        }));

        setProducts(productsWithDetails);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleRedirect = (url) => {
    window.open(url, "_blank"); // Abre a URL em uma nova aba
  };

  return (
    <div className="products-container">
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.imageUrl ? (
              <img
                className="product-image"
                src={product.imageUrl}
                alt={product.name}
              />
            ) : (
              <div className="placeholder-image">Imagem não disponível</div>
            )}
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">R$ {product.price}</p>
              <button
                className="product-button"
                onClick={() => handleRedirect(product.hotmart_url)}
              >
                Comprar agora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
