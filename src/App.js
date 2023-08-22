import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./pages/home/Home";
import PageBestSelling from "./pages/pageBestSelling/PageBestSelling";
import PageOffers from "./pages/pageOffers/PageOffers";
import Login from "./pages/PageLogin/Login";
import UserAccount from "./pages/pageUserAccount/UserAccount";
import LoginContext from "./components/context/LoginContext";
import Cartcontext from './components/context/cartItemContext';
import Product from "./pages/pageProduct/Product";
import Laptop from "./pages/pageLaptop/Laptop";
import Furniture from './pages/PageFurniture/Furniture';
import Book from './pages/pageBook/Book';
import Mobile from './pages/pageMobile/Mobile';
import Stationery from "./pages/pageStationery/Stationery";
import Clothe from "./pages/pageClothe/Clothe";
function App() {
  const [loginUser, setLoginUser] = useState(false);
  const[cartItem, setCartItem]=useState([])

  return (
    <Cartcontext.Provider value={{cartItem, setCartItem}}>
    <LoginContext.Provider value={{ loginUser, setLoginUser }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestSell" element={<PageBestSelling />} />
        <Route path="/discount" element={<PageOffers />} />
        <Route path="/commerce/login" element={<Login />} />
        <Route path="/account" element={<UserAccount />} />
        <Route path="/product/:category/:productId" element={<Product />} />
        <Route path='/laptop' element={<Laptop />} />
        <Route path='/furniture' element={<Furniture />} />
        <Route path='/book' element={<Book />} />
        <Route path='/mobile' element={<Mobile />} />
        <Route path='/stationery' element={<Stationery />} />
        <Route path="/clothe" element={<Clothe />} />
      </Routes>
    </LoginContext.Provider>
    </Cartcontext.Provider>
  );
}

export default App;
