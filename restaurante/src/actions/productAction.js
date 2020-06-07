import axios from "axios";
import { GET_PRODUCTS, ADD_ORDER } from "./types";

export const getProducts = () => (dispatch) => {
  axios
    .get("api/v1/products")
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: null,
      })
    );
};

export const addOrder = id => (dispatch) => {
  axios
    .post(`api/v1/orders/${id}`)
    .then((res) => {
      dispatch({
        type: ADD_ORDER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_ORDER,
        payload: err.response.data
      });
    });
};
