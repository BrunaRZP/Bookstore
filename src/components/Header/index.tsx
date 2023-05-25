import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import SearchBar from '../Bars/SearchBar/SearchBar';
import Carrinho from '../Cart'
import CartIcon from "../../assets/images/carrinho.png";
import { Header1, Nav, HeaderLink, SearchBarDiv, StyledIconWrapper, Img, CartItemCount } from './styles';

// contador do carrinho
const Header: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const itemCount = Object.values(products).reduce((total, product) => total + product.quantity, 0);

  return (
    <Header1>
      <div>
        <Nav>
          <HeaderLink texto="Ecommerce" redirect="/Cart" />
          <HeaderLink texto="Shop" redirect="/Carrinho" />
          <HeaderLink texto="Stories" redirect="/produtos" />
          <HeaderLink texto="About" redirect="/about" />

          <SearchBarDiv>
            <SearchBar onSearch={Carrinho} />
          </SearchBarDiv>

          {/* imagem e contador (mudar) */}
          <StyledIconWrapper>
            <Link to="/cart">
              <Img src={CartIcon}></Img>
              {itemCount > 0 && <CartItemCount itemCount={itemCount}>{itemCount}</CartItemCount>}
            </Link>
          </StyledIconWrapper>

          <HeaderLink texto="Login" redirect="/" />
          {/* adicionar função de login */}
        </Nav>
      </div>
    </Header1>
  );
};

export default Header;
