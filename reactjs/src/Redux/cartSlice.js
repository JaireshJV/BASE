import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(state, "state");
      console.log(action, "action");
      console.log(action.payload, "payload");

      const item = action.payload;
      const existing = state.items?.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items?.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const removeitems = state.items?.find((i) => i.id === item.id);
      if (removeitems) {
        if (removeitems.quantity > 1) {
          removeitems.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== item.id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
