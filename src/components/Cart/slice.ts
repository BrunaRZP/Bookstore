import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../../types/product';

interface CartState {
  products: { [productId: number]: Product };
}

const initialState: CartState = {
  products: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getInitialStateFromLocalStorage(),
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      state.products[product.id] = { ...product, quantity: 1 };
      saveStateToLocalStorage(state);
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const product = state.products[productId];
      if (product) {
        state.products[productId] = { ...product, quantity };
        saveStateToLocalStorage(state);
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      delete state.products[productId];
      saveStateToLocalStorage(state);
    },
  },
});

function getInitialStateFromLocalStorage(): CartState {
  const savedState = localStorage.getItem('cartState');
  return savedState ? JSON.parse(savedState) : initialState;
}

function saveStateToLocalStorage(state: CartState) {
  localStorage.setItem('cartState', JSON.stringify(state));
}

export const {
  addProductToCart,
  removeProduct,
  updateProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
