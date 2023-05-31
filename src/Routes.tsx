import { Routes as WrapperRoutes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/index";
import Sucesso from "./pages/Sucesso";
import Login from "./pages/Login";
import Produtos1 from "../src/components/Produtos1/Produtos1";
import Produtos2 from "../src/components/Produtos2/produtos2";
import Produtos3 from "./components/Produtos3/Produtos3";

export default function Routes() {
    return (
        <WrapperRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Products />} />
            <Route path="/produtos" element={<ProductList />} />
            <Route path="/carrinho" element={<Cart />} /> 
            <Route path="/sucesso" element={<Sucesso />} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Produtos1" element={<Produtos1 />} />
            <Route path="/Produtos2" element={<Produtos2 />} />
            <Route path="/Produtos3" element={<Produtos3 />} />
        </WrapperRoutes>
    );
}
