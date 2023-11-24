import { createSlice } from "@reduxjs/toolkit";
import { FETCH_ALL_PRODUCTS } from "../Components/Constants/Constants";
const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    error: false,
    loading: false,
  },
  reducers: {
    getProducts: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getProductsFail: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});
export const { getProducts, getProductsSuccess, getProductsFail } =
  ProductSlice.actions;
export default ProductSlice.reducer;

export const FetchProducts = () => {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      let response = await fetch(FETCH_ALL_PRODUCTS);
      let data = await response.json();
      if (!response.ok) {
        throw new Error("Could not fetch the data");
      }
      dispatch(getProductsSuccess(data));
    } catch (err) {
      console.log(err);
      dispatch(getProductsFail());
    }
  };
};
