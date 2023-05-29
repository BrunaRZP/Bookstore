import { Routes as WrapperRoutes, Route } from "react-router-dom";
import ProductList from "./components/Products/ProductList";
import Home from "./pages/Home";
import Cart from "./components/Cart/index";
import Sucesso from "./pages/Sucesso";
import Login from "./pages/Login";

export default function Routes() {
    return (
        <WrapperRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/sucesso" element={<Sucesso />} />
            <Route path="/Login" element={<Login/>}/>
        </WrapperRoutes>
    );
}
