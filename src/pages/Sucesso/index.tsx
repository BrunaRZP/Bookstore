import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../components/store';
// import { useNavigate } from 'react-router-dom';
import Product from '../../types/product';
import { DivSucesso, Back, Ul, Total } from './styles';

const Sucess: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const productList = Object.values(products);

  const calculateTotal = () => {
    return productList.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  };

  useEffect(() => {
    const total = calculateTotal();
    document.title = `Carrinho (${productList.length}) - Total: ${total}$`;

    localStorage.setItem('cart', JSON.stringify(products));
  }, [productList, products]);
  
  return (
    <div>

      <div>
        <DivSucesso>
          <h2>Compra realizada com sucesso!</h2>
          <p>Obrigado por fazer sua compra.</p>
          <p>Seu pedido foi processado e em breve será enviado.</p>
        </DivSucesso>

        <Back as={Link} to="/produtos">Continuar comprando</Back>

        <Ul style={{ display: 'flex', justifyContent: 'wrap', flexWrap: 'wrap', margin: '0 20% 3%' }}>
        {productList.map((product: Product) => (
          <li key={product.id} style={{ margin: '6%' }}>
            <div>
              <h1>{product.name}</h1>
              <p>Quantidade: <b>({product.quantity})</b></p>
              <p>Subtotal: <b>$ {product.quantity * product.price}</b></p>
              <p>{product.description}</p>
              <p>{product.category}</p>
            </div>
          </li>
        ))}
      </Ul>

      <Total>Total: $ {calculateTotal()}</Total>
      </div>

    </div>
  );
};

export default Sucess;
