import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { updateProductQuantity, removeProduct } from './slice';
import NavbarNavigatio from '../Navbar/NavbarNavigatio';
import Product from '../../types/product';
import CuponBar from '../Bars/CuponBar/CuponBar';
import {
  Main, EmptyCart, Shopping, ButtonEmpty, Carrinho, NoReady, DivFlex, DivUl, LiUnit,
  Quantity, BMore, BLess, Remove, SectionDetails, DivDetails, Space, CheckOut
} from './styles';

const Cart: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const productList = Object.values(products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = productList.reduce((acc, item) => acc + item.quantity, 0);

  const handleIncreaseQuantity = (productId: number) => {
    const product = products[productId];
    if (product) {
      const updatedQuantity = product.quantity + 1;
      dispatch(updateProductQuantity({ productId, quantity: updatedQuantity }));
    }
  };

  const handleDecreaseQuantity = (productId: number) => {
    const product = products[productId];
    if (product) {
      const updatedQuantity = Math.max(product.quantity - 1, 0);
      dispatch(updateProductQuantity({ productId, quantity: updatedQuantity }));
    }
  };

  const handleRemoveProduct = (productId: number) => {
    dispatch(removeProduct(productId));
  };

  const calculateTotal = () => {
    return productList.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  };

  useEffect(() => {
    const total = calculateTotal();
    document.title = `Carrinho (${productList.length}) - Total: ${total}$`;
    localStorage.setItem('cart', JSON.stringify(products));
  }, [productList, products]);

  // Autenticação
  const handleCheckout = () => {
    if (productList.length === 0) {
      alert('Seu carrinho está vazio. Adicione produtos antes de finalizar o pedido.');
      return;
    }

    const isLoggedIn = false; 

    if (isLoggedIn) {
      navigate('/sucesso');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <Main>
        {productList.length === 0 ? (
          <EmptyCart>
            <div>
              <h3>Carrinho Vazio</h3>
            </div>
            <Shopping as={Link} to="/">
              <ButtonEmpty>Ir às compras agora</ButtonEmpty>
            </Shopping>
          </EmptyCart>
        ) : (
          <Carrinho>
            <h3>Produtos no Carrinho</h3>
            <NoReady as={Link} to="/">
              Não está pronto para finalizar a compra? Continue comprando
            </NoReady>

            <DivFlex>
              <DivUl>
                {productList.map((product: Product) => (
                  <LiUnit key={product.id}>
                    <div>
                      <h1>{product.name}</h1>
                      <p>
                        <strong>$ {product.price} </strong> cada
                      </p>
                      <p>
                        Subtotal: <b>$ {product.quantity * product.price}</b>
                      </p>
                    </div>

                    <Quantity>
                      <p>Quantidade: </p>
                      <BLess onClick={() => handleDecreaseQuantity(product.id)}>-</BLess>
                      <b>{product.quantity}</b>
                      <BMore onClick={() => handleIncreaseQuantity(product.id)}>+</BMore>
                    </Quantity>

                    <div>
                      <Remove onClick={() => handleRemoveProduct(product.id)}>X Remover</Remove>
                    </div>
                  </LiUnit>
                ))}
              </DivUl>

              <SectionDetails>
                <DivDetails> 
                  <h3>Detalhes do pedido</h3>
                  <CuponBar onSearch={NavbarNavigatio} />
                  <p>Itens no Carrinho: ({totalItems})</p>
                  <b>Total: <Space>$ {calculateTotal()}</Space></b>
                </DivDetails>

                <CheckOut>
                  <button onClick={handleCheckout}>Finalizar pedido</button>
                </CheckOut>
              </SectionDetails>
            </DivFlex>
          </Carrinho>
        )}
      </Main>
    </div>
  );
};

export default Cart;
