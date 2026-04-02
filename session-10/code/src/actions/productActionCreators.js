import { getProducts } from "../services/productApi";
import { SET_LOADING, SET_PRODUCTS, TOGGLE_WISHLIST } from "./productActions";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });

    try {
      const data = await getProducts();
      const updateProducts = data.map((p) => ({
        ...p,
        liked: false,
      }));

      dispatch({ type: SET_PRODUCTS, payload: updateProducts });
    } catch (err) {
      console.log(err);
    }

    dispatch({ type: SET_LOADING, payload: false });
  };
};

export const toggleWishlist = (id) => {
  return async (dispatch) => {
    dispatch({
      type: TOGGLE_WISHLIST,
      payload: id,
    });
    try {
      // API call
      await new Promise((res) => setTimeout(res, 500));
    } catch (err) {
      console.log(err);
    }
  };
};
