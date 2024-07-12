import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Produtos from "./Pages/Produtos/Produtos";
import Servicos from "./Pages/Servicos/Servicos";
import LGPD from "./Pages/Termos/LGPD";
import Politica from "./Pages/Termos/Politica";
import Termos from "./Pages/Termos/Termos";

const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/Produtos" element={<Produtos />}/>
     <Route path="/Servicos" element={<Servicos />}/>
     <Route path="/LGPD" element={<LGPD />}/>
     <Route path="/PoliticaDePrivacidade" element={<Politica />}/>
     <Route path="/Termos" element={<Termos />}/>
    </Routes>
  );
}

export default App 