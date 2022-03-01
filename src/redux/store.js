import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const composeEnhancers = composeWithDevTools({});

const initalStore = {
    cartReducer: {
        cartItems : JSON.parse(localStorage.getItem("cartItems")) ?? []
    }
}

const store = createStore(rootReducer, initalStore, composeEnhancers());

export default store;
