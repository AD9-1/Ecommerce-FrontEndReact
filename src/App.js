import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Componenets/Navbar/Navbar";
import Shop from "../src/Pages/Shop/Shop";
import ShopCategory from "../src/Pages/ShopCategory/ShopCategory";
import Product from "../src/Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import RegisterLogin from "./Pages/RegisterLogin/RegisterLogin";
import Footer from "./Componenets/Footer/Footer";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          ></Route>
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          {/* <Route path="/product/:productId" element={<Product />} /> */}

          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<RegisterLogin />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
