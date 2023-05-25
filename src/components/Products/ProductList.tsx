import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../Cart/slice';
import Product from '../../types/product';
import Header from "../Header";

const products: Product[] = [
  {
    id: 1,
    name: 'Livro A',
    price: 20,
    description: 'Descrição do Livro A',
    category: 'Romance',
    quantity: 0,
  },
  {
    id: 2,
    name: 'Livro B',
    price: 15,
    description: 'Descrição do Livro B',
    category: 'Ficção Científica',
    quantity: 0,
  },
];

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const [productList] = useState(products);

  const handleAddToCart = (product: Product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <div>
      <Header />
      {productList.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price} $</p>
          <p>{product.category}</p>
          <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
