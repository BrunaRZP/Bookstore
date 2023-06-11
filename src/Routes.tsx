import { Routes as WrapperRoutes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeAdmin from "./administrativo/Home Admin/index"
import Products from "./pages/Products/Products";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/index";
import Sucesso from "./pages/Sucesso";
import Login from "./pages/Login";
import Produtos1 from "../src/components/Produtos1/Produtos1";
import Produtos2 from "../src/components/Produtos2/produtos2";
import Produtos3 from "./components/Produtos3/Produtos3";

import RegisterAdm from "../src/administrativo/Cadastro de adm/index";
import RegisterProduct from "../src/administrativo/Cadastro de produto/index";
import EditProductPage from "./administrativo/EditProductPage/index";
import UserList from "./administrativo/Lista de usuários";
import CadastroCliente from "./pages/Cadastro/cliente";

export default function Routes() {
    return (
        <WrapperRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/homeadm" element={<HomeAdmin />} />
            <Route path="/Product" element={<Products />} />
            <Route path="/produtos" element={<ProductList />} />
            <Route path="/carrinho" element={<Cart />} /> 
            <Route path="/sucesso" element={<Sucesso />} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/cadastro" element={<CadastroCliente/>} />
            <Route path="/Produtos1" element={<Produtos1 />} />
            <Route path="/Produtos2" element={<Produtos2 />} />
            <Route path="/Produtos3" element={<Produtos3 />} />
            <Route path="/Cadastroadm" element={<RegisterAdm />}/>
            <Route path="/Cadastro-de-produto" element={<RegisterProduct />}/>
            <Route path="/edit-product/:id" element={<EditProductPage />}/>
            <Route path="/lista-de-usuarios" element={<UserList />}/>
        </WrapperRoutes>
    );
}
