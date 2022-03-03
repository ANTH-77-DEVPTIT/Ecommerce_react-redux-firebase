const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,//sử dụng ES6 spread. là toán tử dãi
        cartItems: [...state.cartItems, action.payload]
      }
    }
    case "DELETE_FROM_CART" : {
      return {
        ...state,
        cartItems: state.cartItems.filter(obj => obj.id !== action.payload.id)
      }
    }

    default:
      return state;
  }
};

export default cartReducer;
