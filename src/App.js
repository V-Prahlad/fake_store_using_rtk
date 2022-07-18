import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Component/Cart";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";

import "./global.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
