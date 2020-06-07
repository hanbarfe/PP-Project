import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import OrderReducer from "./orderReducer";

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  order: OrderReducer,
});
