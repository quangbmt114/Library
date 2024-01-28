import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ProductState } from ".";
import { getListProduct } from "./Product.thunks";

export const extraReducers = (
  builder: ActionReducerMapBuilder<NoInfer<ProductState>>
) => {
  builder
    .addCase(getListProduct.pending, (state) => {
      //
    })
    .addCase(getListProduct.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(getListProduct.rejected, (state) => {
      //
    });
};
