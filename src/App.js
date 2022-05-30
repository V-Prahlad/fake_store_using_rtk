import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Component/Cart";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import store from "./redux/store";
import { Provider } from "react-redux";

import "./global.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" exact element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
