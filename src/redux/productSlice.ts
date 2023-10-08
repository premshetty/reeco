// redux/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  products: Product[];
}

export interface Product {
  product_name: string;
  brand: string;
  price: string;
  quantity: string;
  total: string;
  id?: number;
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state: { product: ProductState }) =>
  state.product.products;
export default productSlice.reducer;
