import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../components/store';
// import { useNavigate } from 'react-router-dom';
import Product from '../../types/product';
import { DivSucesso, Back, Ul } from './styles';

const Sucess: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const productList = Object.values(products);

  // const totalItems = productList.reduce((acc, item) => acc + item.quantity, 0);

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
          <h1>Compra realizada com sucesso!</h1>
          <p>Obrigado por fazer sua compra.</p>
          <p>Seu pedido foi processado e em breve será enviado.</p>

          <Back as={Link} to="/produtos">Continuar comprando</Back>
        </DivSucesso>

        <Ul>
          {productList.map((product: Product) => (
            <li key={product.id}>
              <div>
                <h1>{product.name}</h1>
                <p>Quantidade: <b>({product.quantity})</b></p>
                <p>Subtotal: <b>$ {product.quantity * product.price}</b></p>
                <p>{product.description}</p>
                <p>{product.category}</p>
              </div>
            </li>
          ))}
          <b>Total: $ {calculateTotal()}</b>
        </Ul>

        
      </div>

    </div>
  );
};

export default Sucess;
