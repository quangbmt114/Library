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
export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (args: string, { rejectWithValue }) => {
    try {
      const response = await ProductService.deleteProduct(args);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/update",
  async (args: object, { rejectWithValue }) => {
    try {
      const response = await ProductService.updateProduct(args);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const createProduct = createAsyncThunk(
  "product/create",
  async (args: object, { rejectWithValue }) => {
    try {
      const response = await ProductService.createProduct(args);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
