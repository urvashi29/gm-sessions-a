import {
  SET_LOADING,
  SET_PRODUCTS,
  TOGGLE_WISHLIST,
} from "../actions/productActions";

const initialState = {
  list: [],
  loading: false,
};

export default function productReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, list: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case TOGGLE_WISHLIST:
      return {
        ...state,
        list: state.list.map((product) =>
          product.id === action.payload
            ? { ...product, liked: !product.liked }
            : product,
        ),
      };
    default:
      return state;
  }
}
