import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { pizzaListReducer } from './pizzaListReducer';

export const reducer = combineReducers({
  cart: cartReducer,
  pizza: pizzaListReducer,
});
