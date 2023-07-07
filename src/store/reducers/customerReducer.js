export const customerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CUSTOMER_INFO':
      return action.payload;
    default:
      return state;
  }
};
