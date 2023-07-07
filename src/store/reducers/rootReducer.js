import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { pizzaListReducer } from './pizzaListReducer';
import { customerReducer } from './customerReducer';

export const reducer = combineReducers({
  customer: customerReducer,
  cart: cartReducer,
  pizza: pizzaListReducer,
});
