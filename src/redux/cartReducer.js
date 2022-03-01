const initialState = {
  cartItems: ["item1","item2"],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_TYPE_1":
      return state;

    default:
      return state;
  }
};

export default cartReducer;
