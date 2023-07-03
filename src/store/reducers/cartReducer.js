export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      // The payload in this case *is* the id
      return [...state.filter((id) => id !== action.payload)];
    default:
      return state;
  }
};
