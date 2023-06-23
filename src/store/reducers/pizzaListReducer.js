export const pizzaListReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PIZZA_LIST':
      return action.payload;
    case 'ADD_PIZZA':
      return [...state, action.payload];
    case 'REMOVE_PIZZA':
      return [...state.filter((item) => item.id !== action.payload.id)];
    default:
      return state;
  }
};
