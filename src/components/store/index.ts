import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from '../Cart/slice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
