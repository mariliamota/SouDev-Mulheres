import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Categorias from "./Pages/Categorias";
import Home from "./Pages/Home";
import MeusPedidos from "./Pages/MeusPedidos";
import Produtos from "./Pages/Produtos";

export default function App(){
  return(
    <div>
      <BrowserRouter>
        <NavBar/>
        <Menu/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/meus-pedidos" element={<MeusPedidos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}