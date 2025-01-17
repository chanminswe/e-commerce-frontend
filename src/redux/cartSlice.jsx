import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (removeItem) => removeItem.title !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { title, quantity } = action.payload;
      const item = state.cart.find((cartItem) => cartItem.title === title);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter(
            (cartItem) => cartItem.title !== title
          );
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
