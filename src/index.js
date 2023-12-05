import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductSlice from "./Slices/ProductSlice";

import { cartReducer, getTotal } from "./Slices/CartSlice";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import SearchFilter from "./Slices/SearchFilter";
import ProductDetails from "./Components/ProductsList/ProductDetails";

export const store = configureStore({
  reducer: {
    Product: ProductSlice,
    Cart: cartReducer,
    Search: SearchFilter,
  },
});

store.dispatch(getTotal());
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
