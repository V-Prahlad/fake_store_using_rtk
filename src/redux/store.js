import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from "./cartSlice";
import { productAPI } from "./rtkQuery";

const store = configureStore({
  reducer: { cartReducer, [productAPI.reducerPath]: productAPI.reducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});

export default store;
setupListeners(store.dispatch);
