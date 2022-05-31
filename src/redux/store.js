import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import cartReducer from "./cartSlice";
import { productAPI } from "./rtkQuery";

const reducers = combineReducers({
  cartReducer,
  [productAPI.reducerPath]: productAPI.reducer,
});

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});

export default store;
setupListeners(store.dispatch);
