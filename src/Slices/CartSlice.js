import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartQuantity: 0,
    totalAmount: 0,
    totalCartQuantity: 0,
    totalCartPrice: 0,
    cartOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = {
        ...action.payload,
        cartQuantity: 1,
        totalAmount: action?.payload?.price,
      };
      const existingProduct = state?.cart?.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        toast.info(`increased ${action.payload.title} cart quantity`, {
          position: "bottom-left",
        });
        existingProduct.cartQuantity += 1;
        existingProduct.totalAmount += action?.payload?.price;
      } else {
        toast.success(`${action.payload.title}added to cart`, {
          position: "bottom-left",
        });
        state?.cart?.push(productToAdd);
      }
    },
    increaseQuantity: (state, action) => {
      const CartToIncrease = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (CartToIncrease) {
        toast.success(`increased the quantity of ${action.payload.title} `, {
          position: "bottom-left",
        });
        CartToIncrease.cartQuantity += 1;
        CartToIncrease.totalAmount += action?.payload?.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const ProductToDecrease = action.payload;
      const CartToDecrease = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (CartToDecrease) {
        toast.warn(`decreased the quantity of ${action.payload.title} `, {
          position: "bottom-left",
        });
        CartToDecrease.cartQuantity -= 1;
        CartToDecrease.totalAmount -= action?.payload?.price;
        if (CartToDecrease.cartQuantity < 1) {
          toast.error(`${action.payload.title} removed`, {
            position: "bottom-left",
          });
          state.cart = state.cart.filter(
            (cartItem) => cartItem.id !== ProductToDecrease.id
          );
        }
      }
    },
    removeFromCart: (state, action) => {
      toast.error(`${action.payload.title} removed`, {
        position: "bottom-left",
      });
      const item = action.payload;
      state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id);
    },
    clearCart: (state) => {
      state.cart = [];
      toast.error(`all items removed`, {
        position: "bottom-left",
      });
    },
    getTotal: (state) => {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          cartTotal.total += price * cartQuantity;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: null,
          quantity: null,
        }
      );
      state.totalCartQuantity = quantity;
      state.totalCartPrice = total;
    },
  },
});
export const cartReducer = CartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  getTotal,
} = CartSlice.actions;
