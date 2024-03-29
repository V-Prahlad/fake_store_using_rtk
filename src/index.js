import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import store from "./redux/store";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
