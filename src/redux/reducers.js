import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subTotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;

      const isItemExist = state.cartItems.find((i) => i.id === item.id);

      if (isItemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) {
            i.quantity += 1;
          }
        });
      } else {
        state.cartItems.push(item);
      }
    },
    decrement: (state, action) => {
      const item = action.payload;

      state.cartItems.forEach((i) => {
        if (i.id === item.id) {
          if (i.quantity !== 1) i.quantity -= 1;
        }
      });
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
    calculatePrice: (state) => {
      let sum = 0;
      state.cartItems.forEach((i) => (sum += i.price * i.quantity));
      state.subTotal = sum;
      state.shipping = state.subTotal > 1000 ? 0 : 200;
      state.tax = +(state.subTotal * 0.18).toFixed(); //plus id added becoz now toFixed will return no. otherwise it returns string
      state.total = state.subTotal + state.tax + state.shipping;
    },
  }
);
