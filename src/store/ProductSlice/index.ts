import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/Product";
import { extraReducers } from "./product.reducers";
import { RootState } from "@/lib/store";
export type ProductState = {
  data: Array<Product> | null;
};
const initialState: ProductState = {
  data: null,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //
  },
  extraReducers: extraReducers,
});

export const selectListProduct = (state: RootState) => state.product.data;

export default productSlice.reducer;
