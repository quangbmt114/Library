import { ProductService } from "@/services/product";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getListProduct = createAsyncThunk(
  "product/list",
  async (args, { rejectWithValue }) => {
    try {
      const response = await ProductService.getListProduct();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
