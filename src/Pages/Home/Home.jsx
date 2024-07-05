import React, { useState, useEffect } from "react";
import "./style.css";
import Nav from "../../Components/Nav/Nav";
import star from "../../assets/Home/star.png";
import pc from "../../assets/Home/pc.png";
import desconto from "../../assets/Home/desconto.png";
import Footer from "../../Components/Footer/Footer";
import ProductCarousel from "../../Components/Products/Products";
import ServicesCarousel from "../../Components/Services/Services";
import foneImage from '../../assets/Products/fone.jpg';
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const products = [
  { id: 1, image: foneImage },
  { id: 2, image: foneImage },
  { id: 3, image: foneImage },
  { id: 4, image: foneImage },
  { id: 5, image: foneImage },
  { id: 6, image: foneImage },
];

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showDiscountCode, setShowDiscountCode] = useState(false);
  const [showPartnerPopup, setShowPartnerPopup] = useState(false); // Estado para controlar a nova popup de cadastro
  const [cpf, setCpf] = useState('');
  const { width, height } = useWindowSize();

  const handleOpenPartnerPopup = (isOpen) => {
    setShowPartnerPopup(isOpen);
  };

  useEffect(() => {
    // Verifica se a popup já foi fechada permanentemente
    const isPopupClosed = localStorage.getItem('popupClosed');
    
    // Mostra a popup apenas se não estiver fechada permanentemente
    if (!isPopupClosed) {
      setTimeout(() => {
        setShowPopup(true);
      }, 5000); // Mostrar popup após 5 segundos
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowDiscountCode(false); // Garantir que o código de desconto seja fechado junto com a popup inicial
  };

  const handleEnviarFormulario = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de submit do formulário

    // Simulando envio do CPF
    // Aqui você colocaria a lógica real para enviar o CPF para o servidor
    // Por exemplo: enviarFormulario();

    // Mostra o Confetti imediatamente após clicar no botão "Enviar"
    setShowConfetti(true);

    // Fecha a popup após um tempo (opcional)
    setTimeout(() => {
      setShowPopup(false);
      setShowConfetti(false); // Esconde o Confetti depois de fechar a popup
      setShowDiscountCode(true); // Mostra o código de desconto
    }, 3000); // Fecha a popup após 3 segundos
  };

  const handleClosePopupPermanently = () => {
    localStorage.setItem('popupClosed', 'true'); // Salva o estado de fechamento da popup
    setShowPopup(false);
    setShowDiscountCode(false); // Garantir que o código de desconto seja fechado junto com a popup inicial
  };

  return (
    <div>
      <Nav openPartnerPopup={handleOpenPartnerPopup} />
      <div className="banner">
        <h2 className="banner-h2">
          Clube de <span className="banner-span">Benefícios</span>
        </h2>
        <p className="banner-p">
          Chegou a sua vez de ter vantagem com os parceiros do Centro Europeu.
        </p>
      </div>

      <div className="tutorial">
        <div className="passo1">
          <div className="stars">
            <div className="stars1">
              <img alt="" src={star} />
              <img alt="" src={star} />
            </div>
            <div className="stars2">
              <img alt="" src={star} />
              <img alt="" src={star} />
            </div>
            <div className="stars3">
              <img alt="" src={star} />
              <img alt="" src={star} />
            </div>
          </div>
          <div className="passo1-text">
            <h2>1.</h2>
            <p>
              Basta ser <span>aluno ou ex-aluno</span> do Centro Europeu.
            </p>
          </div>
        </div>

        <div className="passo2">
          <img alt="" src={pc} />
          <div className="passo2-text">
            <h2>2.</h2>
            <p>
              Navegue pelo site <span>e encontre seu desconto.</span>
            </p>
          </div>
        </div>

        <div className="passo3">
          <img alt="" src={desconto} />
          <div className="passo2-text">
            <h2>3.</h2>
            <p>
              Utilize o cupom <span>nos sites/lojas parceiras.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="product-carousel-section">
        <ProductCarousel products={products} />
        <ServicesCarousel products={products} />
      </div>

      {/* Renderização condicional da popup */}
      {showPopup && !showDiscountCode && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={handleClosePopupPermanently}>
              ×
            </span>
            <h2>Já é nosso aluno?</h2>
            <h4>Então vem que tem desconto!</h4>
            <p>
              Para receber nosso cupom especial, basta informar seu CPF no campo
              abaixo:
            </p>
            <form className="popup-form" onSubmit={handleEnviarFormulario}>
              <input
                className="popup-input"
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <button className="popup-enviar" type="submit">
                Enviar
              </button>
              {showConfetti && <Confetti width={"1000px"} height={height} colors={["blue", "yellow"]} recycle={false} />}
            </form>
            {/* Conteúdo do cupom de desconto */}
          </div>
        </div>
      )}

      {/* Renderização condicional do código de desconto */}
      {showDiscountCode && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={handleClosePopup}>
              ×
            </span>
            <h2>Código de Desconto</h2>
            <p>Seu código de desconto é: <strong>DESCONTO123</strong></p>
            <p>Utilize este código em suas compras!</p>
          </div>
        </div>
      )}

      {/* Renderização condicional da popup de parceiro */}
      {showPartnerPopup && (
        <div className="popup-parceiro">
          <div className="popup-content-parceiro">
            <span className="close-btn" onClick={() => setShowPartnerPopup(false)}>
              ×
            </span>
            <h2 className="parceiro-h2">Indique um Parceiro</h2>
            <h4>Indique um parceiro para fazer parte da comunidade:</h4>
            <form className="form-parceiro">
                <input
                  className="popup-input"
                  type="text"
                  placeholder="Nome da loja"
                />
                <input
                  className="popup-input"
                  type="email"
                  placeholder="E-mail"
                />
                <input
                  className="popup-input"
                  type="text"
                  placeholder="Telefone"
                />
                <input
                  className="popup-input"
                  type="text"
                  placeholder="Endereço"
                />
                <button className="popup-enviar" type="submit">
                  Cadastrar
                </button>
              </form>
          </div>
        </div>
      )}

      {/* Renderização condicional do Confetti */}
      {/* {showConfetti && <Confetti width={width} height={height} recycle={false} />} */}
      
      <div className="divulgue">
        <div className="divulgue-text">
          <h2>Divulgue seus produtos e serviços em nosso marketplace</h2>
          <p>
            Benefícios e ofertas exclusivas para alunos e ex-alunos de Centro
            Europeu.
          </p>
          <button>Cadastre-se</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
