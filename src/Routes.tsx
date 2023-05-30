import { Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";
import ProductList from "../src/Products/Products";
import Home from "./pages/Home";
import Cart from "./components/Cart/index";
import Sucesso from "./pages/Sucesso";
import Login from "./pages/Login";
import Produtos1 from "./Produtos1/Produtos1";
import Produtos2 from "./Produtos2/produtos2";
import Produtos3 from "./Produtos3/Produtos3";

export default function Routes() {
    return (

        <WrapperRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/sucesso" element={<Sucesso />} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Produtos1" element={<Produtos1 />} />
            <Route path="/Produtos2" element={<Produtos2 />} />
            <Route path="/Produtos3" element={<Produtos3 />} />
         </WrapperRoutes>
    );
}
